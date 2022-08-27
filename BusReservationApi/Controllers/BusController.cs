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
        [Route("seatsavb/{BusId}")]  // 
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

        [HttpGet]
        [Route("seatdetails/{BusId}")]
        public IActionResult GetAvbDetails(int BusId)
        {
            //var data = from bs in db.BusSeats where bs.BusId == BusId && bs.Available.Equals(true) select bs(map => new { });
            var data = db.BusSeats.Where(busSeat => busSeat.BusId == BusId).Select(map => new { map.BusId, map.SeatNo, map.Available });
            return Ok(data);
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
        [Route("deletebus/{BusId}")]
        public IActionResult DeleteBus(int BusId)
        {
            try
            {
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
        public IActionResult SearchListOfBus(SearchQuery sq)
        {
            try
            {
                var data = db.buses.Where(b =>
                    b.Destination.Equals(sq.Destination) &&
                    b.Source.Equals(sq.Source) && sq.DDate.Date.Equals(b.Dtime.Date)
                 );

                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpPut]
        [Route("bookseat")]
        public IActionResult Setavbseat(Setseats ss)
        {
            var data = db.BusSeats.Where(busSeats => busSeats.BusId == ss.busId && busSeats.SeatNo.Equals(ss.seatno)).FirstOrDefault();
            if (data.Available.Equals(false)) return BadRequest("Seat Already Booked..! Please choose available seats");
            try {
                db.Database.ExecuteSqlInterpolated($"ResetSeat {ss.busId},{ss.seatno}");
            }
            catch (Exception ex) {
                return BadRequest(ex.InnerException.Message);
            }
            return Ok("Ticket Booked Successfully..!");
        }

        [HttpPut]
        [Route("cancelseat")]
        public IActionResult Resetavbseat(Setseats ss)
        {
            var data = db.BusSeats.Where(busSeats => busSeats.BusId == ss.busId && busSeats.SeatNo.Equals(ss.seatno)).FirstOrDefault();
            try
            {
                db.Database.ExecuteSqlInterpolated($"ResetSeat {ss.busId},{ss.seatno}");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
            return Ok("Ticket Cancelled Successfully..!");
        }

        [HttpPut]
        [Route("bookseats")]
        public IActionResult Setavbseats(Setmulseats ss)
        {
            foreach (string seat in ss.seatno) {
                var data = db.BusSeats.Where(busSeats => busSeats.BusId == ss.busId && busSeats.SeatNo.Equals(seat)).FirstOrDefault();
                if (data.Available.Equals(false)) return BadRequest("Seat Already Booked..! Please choose available seats");
                try
                {
                    db.Database.ExecuteSqlInterpolated($"ResetSeat {ss.busId},{seat}");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }      
            return Ok("Tickets Booked Successfully..!");
        }

        public class SearchQuery
        {
            public DateTime DDate { get; set; }
            public string Source { get; set; }
            public string Destination { get; set; }
        }
        public class Setseats
        {
            public int busId { get; set; }
            public string seatno { get; set; }
        }
        public class Setmulseats
        {
            public int busId { get; set; }
            public string[] seatno { get; set; }
        }
    }
}


