using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using BusReservationApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;

namespace BusReservationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusController : ControllerBase
    {
        BusReservationContext db = new BusReservationContext();

        [HttpGet]
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
        [Route("{BusId}")]
        public IActionResult GetBus(int BusId)
        {
            try
            {
                var data = db.buses.Where(B => B.BusId == BusId).FirstOrDefault();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("seatsavb/{BusId}")]
        public IActionResult GetBusAvbSeats(int BusId)
        {
            try
            {
                var data = db.BusSeats.Where(busSeat => busSeat.BusId == BusId && busSeat.Available.Equals(true)).Count();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpPut]
        [Route("editbus/{BusId}")]
        public IActionResult PutBus(int BusId, Bus bus)
        {
            var data = db.buses.Where(buses => buses.BusId == BusId).FirstOrDefault();
            try
            {
                if (ModelState.IsValid)
                {
                    data.BusNo = bus.BusNo;
                    data.Rows = bus.Rows;
                    data.Dtime = bus.Dtime;
                    data.Atime = bus.Atime;
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
            var edited_record = GetBus(BusId);
            return Ok(edited_record);
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
                    // call procedure to add the seats for the added bus
                    db.Database.ExecuteSqlInterpolated($"AddBusSeat {bus.BusId}");
                    db.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
            return Created("Record Successfully Added", bus);
        }

        [HttpDelete]
        [Route("deletebus/{BusId}")]
        public IActionResult DeleteBus(int BusId)
        {
            try
            {
                // before deleting the records for the bus
                // delete the bus seats from bus seat table
                db.Database.ExecuteSqlInterpolated($"DeleteBusSeat {BusId}");
                db.SaveChanges();

                var data = db.buses.Where(buses => buses.BusId == BusId).FirstOrDefault();
                db.buses.Remove(data);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }

        }

        [HttpPost]
        [Route("search")]
        public IActionResult SearchListOfBus(SearchQuery query)
        {
            try
            {
                var data = db.buses.Where(b =>
                    b.Destination.Equals(query.Destination) &&
                    b.Source.Equals(query.Source) && query.DDate.Date.Equals(b.Dtime.Date)
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
            var data = db.BusSeats.Where(busSeat => busSeat.BusId == BusId).Select(map => new { map.BusId, map.SeatNo, map.Available });
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
        public IActionResult Setavbseats(ResetBusSeatQuery query)
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
        public class ResetBusSeatQuery
        {
            public int busId { get; set; }
            public string[]seats { get; set; }
        }
    }
}


