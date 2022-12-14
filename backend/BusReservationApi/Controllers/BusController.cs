using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using BusReservationApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BusReservationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusController : ControllerBase
    {
        BusReservationContext db = new BusReservationContext();
        TransactionController transactionController = new TransactionController();

        [HttpGet]
        [Route("list")]
        public IActionResult Get()
        {
            try
            {
                var data = db.buses;
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("detail/{busNo}")]
        public IActionResult GetBus(string busNo)
        {
            try
            {
                var data = db.buses.Where(B => B.BusNo.Equals(busNo)).FirstOrDefault();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("seatsavb/{busNo}")]
        public IActionResult GetBusAvbSeats(string busNo)
        {
            try
            {
                var rec = db.buses.Where(b => b.BusNo.Equals(busNo)).FirstOrDefault();
                if (rec == null) return NotFound();

                var busId = rec.BusId;
                var data = db.BusSeats.Where(busSeat => busSeat.BusId == busId && busSeat.Available.Equals(true)).Count();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpPut]
        [Route("editbus/{busNo}")]
        public IActionResult PutBus(string busNo, Bus bus)
        {
            var data = db.buses.Where(buses => buses.BusNo.Equals(busNo)).FirstOrDefault();
            try
            {
                if (ModelState.IsValid)
                {
                    data.BusNo = bus.BusNo;
                    data.Rows = bus.Rows;
                    data.DTime = bus.DTime;
                    data.ATime = bus.ATime;
                    data.Pickup = bus.Pickup;
                    data.SeatCost = bus.SeatCost;
                    data.DriverName = bus.DriverName;
                    data.DriverContact = bus.DriverContact;
                    data.TypeOfBus = bus.TypeOfBus;
                    data.Source = bus.Source;
                    data.Destination = bus.Destination;
                    data.Distance = bus.Distance;
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
            db.SaveChanges();
            return Ok(data);
        }

        [HttpPost]
        [Route("addbus")]
        public IActionResult PostBus(Bus bus)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    db.buses.Add(bus);
                    db.SaveChanges();
                    var busId = db.buses.Where(b => b.BusNo.Equals(bus.BusNo)).FirstOrDefault().BusId;
                    db.Database.ExecuteSqlInterpolated($"AddBusSeat {busId}");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
            db.SaveChanges();
            return Created("Record Successfully Added", bus);
        }

        [HttpDelete]
        [Route("deletebus/{busNo}")]
        public IActionResult DeleteBus(string busNo)
        {
            try
            {
                // before deleting the records for the bus
                // delete the bus seats from bus seat table
                var rec = db.buses.Where(b => b.BusNo.Equals(busNo)).FirstOrDefault();
                if (rec == null) return NotFound();
                var busId = rec.BusId;
                db.Database.ExecuteSqlInterpolated($"DeleteBusSeat {busId}");
                db.SaveChanges();

                //// remove the transaction details
                //var records = db.TransactionDetails.Where(t => t.BusId == busId);
                //foreach (var rec in records)
                //{
                //    transactionController.DeleteTransaction(rec.Tid);
                //    db.SaveChanges();
                //}
                
                // also have to delete bus id from transaction tables
                var data = db.buses.Where(buses => buses.BusNo.Equals(busNo)).FirstOrDefault();
                db.buses.Remove(data);
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
            db.SaveChanges();
            return Ok();
        }

        [HttpPost]
        [Route("search")]
        public IActionResult SearchListOfBus(SearchQuery query)
        {
            try
            {
                var data = db.buses.Where(b =>
                    b.Destination.Equals(query.Destination) &&
                    b.Source.Equals(query.Source) && query.DDate.Date.Equals(b.DTime.Date)
                 );

                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("seatdetails/{BusId}")]
        public IActionResult GetAvbDetails(int BusId)
        {
            var data = db.BusSeats.Where(busSeat => busSeat.BusId == BusId).Select(map => new { map.BusId, map.SeatNo, map.Available});
            return Ok(data);
        }

        [HttpPut]
        [Route("resetseat")]
        public IActionResult ResetSeat(ChangeBusSeatStatusQuery query)
        {
            try {
                db.Database.ExecuteSqlInterpolated($"ResetSeat {query.busId},{query.seatNo}");
            }
            catch (Exception ex) {
                return BadRequest(ex.InnerException.Message);
            }
            return Ok("Seat Status is changed to FALSE");
        }

        [HttpPut]
        [Route("setseat")]
        public IActionResult SetSeat(ChangeBusSeatStatusQuery query)
        {
            try
            {
                db.Database.ExecuteSqlInterpolated($"SetSeat {query.busId},{query.seatNo}");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
            return Ok("Seat Status is changed to TRUE");
        }

        [HttpPut]
        [Route("resetseats")]
        public IActionResult ResetAvbSeats(MultipleBusSeatQuery query)
        {
            foreach (string seatNo in query.seats) {
                try
                {
                    db.Database.ExecuteSqlInterpolated($"ResetSeat {query.busId},{seatNo}");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }      
            return Ok();
        }

        [HttpPut]
        [Route("setseats")]
        public IActionResult SetAvbSeats(MultipleBusSeatQuery query)
        {
            foreach (string seatNo in query.seats)
            {
                try
                {
                    db.Database.ExecuteSqlInterpolated($"SetSeat {query.busId},{seatNo}");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Ok();
        }

        public class SearchQuery
        {
            public DateTime DDate { get; set; }
            public string Source { get; set; }
            public string Destination { get; set; }
        }
        public class ChangeBusSeatStatusQuery
        {
            public int busId { get; set; }
            public string seatNo { get; set; }
        }
        public class MultipleBusSeatQuery
        {
            public int busId { get; set; }
            public string[]seats { get; set; }
        }
    }
}


