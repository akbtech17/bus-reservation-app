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
}
