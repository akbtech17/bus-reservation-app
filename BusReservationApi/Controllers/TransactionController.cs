using BusReservationApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace BusReservationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        BusReservationContext db = new BusReservationContext();

        [HttpGet]
        [Route("passengers/{tId}")]
        public IActionResult GetPassengers(int tId)
        {
            try
            {
                var data = db.Passengers.Where(Passenger => Passenger.Tid == tId);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpPost]
        [Route("passengers/{tId}")]
        public IActionResult PostPassengers(int tId, Passenger []passengers)
        {
            try
            {
                foreach(var passenger in passengers) { 
                    db.Passengers.Add(passenger);  
                }
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("seats/{tId}")]
        public IActionResult GetListOfSeatsBooked(int tId)
        {
            try
            {
                var seats = db.TransactionSeats.Where(ts => ts.Tid == tId).Select(ts => ts);
                return Ok(seats);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpPost]
        [Route("seats/{tId}")]
        public IActionResult PostListOfSeatsBooked(int tId,string []seats)
        {
            try
            {
                foreach (var seat in seats)
                {
                    db.TransactionSeats.Add(new TransactionSeat { Tid = tId, SeatNo = seat });
                }
                db.SaveChanges();
                return Ok(seats);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateTransaction(TransactionQuery query) 
        {
            try
            {
                // 1. set the trasaction table
                db.TransactionDetails.Add(new TransactionDetail
                {
                    Tid = query.tId,
                    BusId = query.busId,
                    CustomerId = query.customerId,
                    DateOfBooking = query.dateOfBooking,
                    TotalCost = query.totalCost
                });
                db.SaveChanges();

                // 2. set the passenger table
                foreach (var passenger in query.passengers)
                {
                    db.Passengers.Add(passenger);
                }
                db.SaveChanges();

                // 3. set the transaction seat table
                foreach (var seat in query.seats)
                {
                    db.TransactionSeats.Add(new TransactionSeat
                    {
                        Tid = query.tId,
                        SeatNo = seat
                    });
                }
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }


        [HttpDelete]
        [Route("{tId}")]
        public IActionResult DeleteTransaction(int tId)
        {
            try
            {
                // 1. remove the passengers from the table
                var passengers = db.Passengers.Where(pass => pass.Tid == tId).Select(pass => pass);
                foreach (var pass in passengers)
                {
                    db.Passengers.Remove(pass);
                }
                db.SaveChanges();

                // 2. make the seats empty for that transaction 
                var seats = db.TransactionSeats.Where(seat => seat.Tid == tId).Select(pass => pass);
                foreach (var seat in seats)
                {
                    db.TransactionSeats.Remove(seat);
                }
                db.SaveChanges();

                // 3. reset the trasaction table
                var transactionDetails = db.TransactionDetails.Where(t => t.Tid == tId).FirstOrDefault();

                var customerId = transactionDetails.CustomerId;
                var ticketAmunt = transactionDetails.TotalCost;

                // 4. update customer wallet
                UpdateWalletAmount(customerId, ticketAmunt);

                db.TransactionDetails.Remove(transactionDetails);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        public void UpdateWalletAmount(int customerId, int Amount)
        {
            try
            {
                var data = db.Customers.Where(cust => cust.CustomerId == customerId).FirstOrDefault();
                if (data == null) return;

                data.Wallet += Amount;
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.InnerException.Message);
            }
        }


        [HttpGet]
        [Route("{cId}")]
        public IActionResult GetTransactionDetailsForCustomer(int cId)
        {
            TransactionResponse []mainResponse;
            try
            {
                var records = db.TransactionDetails.Where(t => t.CustomerId == cId).ToList();
                mainResponse = new TransactionResponse[records.Count];
                int cnnt = 0;
                foreach (var rec in records)
                {
                    int tId = rec.Tid;
                    TransactionResponse response = new TransactionResponse();
                    // get the transaction details from the transaction table
                    var transactionDetails = db.TransactionDetails.Where(t => t.Tid == tId).FirstOrDefault();
                    response.tId = transactionDetails.Tid;
                    response.busId = transactionDetails.BusId;
                    response.totalCost = transactionDetails.TotalCost;
                    response.customerId = transactionDetails.CustomerId;

                    // get the passengers details
                    var data = db.Passengers.Where(pass => pass.Tid == tId).Select(pass => pass).ToList();
                    int cnt = data.Count();

                    response.passengers = new PassengerData[cnt];
                    for (int i = 0; i < cnt; i++)
                    {
                        PassengerData pdata = new PassengerData();
                        pdata.Pid = data[i].Pid;
                        pdata.Pname = data[i].Pname;
                        pdata.Adhaar = data[i].Adhaar;
                        pdata.Gender = data[i].Gender;
                        pdata.Age = data[i].Age;

                        response.passengers[i] = pdata;
                    }

                    // get the seats booked list
                    var seats = db.TransactionSeats.Where(seat => seat.Tid == tId).ToList();
                    response.seats = new string[seats.Count];
                    for (int i = 0; i < seats.Count; i++)
                    {
                        response.seats[i] = seats[i].SeatNo;
                    }
                    mainResponse[cnnt++] = response;
                }
                return Ok(mainResponse);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }
    }

    public class PassengerData {
        public int Pid { get; set; }
        public string Pname { get; set; }
        public int Age { get; set; }
        public string Adhaar { get; set; }
        public string Gender { get; set; }
    }

    public class TransactionQuery {
        public int tId { get; set; }
        public int busId { get; set; }
        public int totalCost { get; set; }
        public int customerId { get; set; }
        public DateTime dateOfBooking { get; set; }
        public string[] seats { get; set; }
        public Passenger[] passengers { get; set; }
    }

    public class TransactionResponse
    {
        public int tId { get; set; }
        public int busId { get; set; }
        public int totalCost { get; set; }
        public int customerId { get; set; }
        public DateTime dateOfBooking { get; set; }
        public string[] seats { get; set; }
        public PassengerData[] passengers { get; set; }
    }
}
