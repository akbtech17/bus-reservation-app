using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusAPI.Models;

namespace BusAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusController : Controller
    {
        BusReservationContext db = new BusReservationContext();
        /*static List<Bu> Buses = new List<Bu> {
            new Bu{ BusNo="UK123", Rows=4, Columns=5, RouteId=1, Pickup="Swargate", SeatCost=300, DriverName="Vibhor", DriverContact="1234567890"},
            new Bu{ BusNo="UK124", Rows=4, Columns=5, RouteId=4, Pickup="India Gate", SeatCost=600, DriverName="MahaLakshmi", DriverContact="6584987812"}
        };*/

        // GET: api/<AdminSigninController>
        // to get the details of all admins
        //Edited
        [HttpGet]
        [Route("listbus")]
        public IActionResult GetBus()
        {
            var data = db.buses.ToList();
            return Ok(data);
        }
        [HttpGet]
        [Route("listbus/{BusId}")]
        public IActionResult GetBus(int BusId) {
            try
            {
                var data = db.buses.Where(buses => buses.BusId == BusId).FirstOrDefault();
                return Ok(data);
            }
            catch (Exception ex) {
                return BadRequest(ex.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("editbus/{BusId}")]
        public IActionResult PutBus(int BusId, Bu bus) {
            var data = db.buses.Where(buses => buses.BusId == BusId).FirstOrDefault();
            try {
                if (ModelState.IsValid)
                {
                    data.BusId = bus.BusId;
                    data.BusNo = bus.BusNo;
                    data.Rows = bus.Rows;
                    data.Dtime = bus.Dtime;
                    data.Atime = bus.Atime;
                    data.Pickup = bus.Pickup;
                    data.SeatCost = bus.SeatCost;
                    data.DriverName = bus.DriverName;
                    data.DriverContact = bus.DriverContact;
                    data.TypeOfBus = bus.TypeOfBus;
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
            db.SaveChanges(); 
            return Ok();
        }
        [HttpPost]
        [Route("addbus")]
        public IActionResult PostBus(Bu bus) {
            try {
                if (ModelState.IsValid) {
                    db.buses.Add(bus);
                }
            }
            catch (Exception ex) {
                return BadRequest(ex.InnerException.Message);
            }
            db.SaveChanges();
            return Created("Record Successfully Added", bus);
        }
        [HttpDelete]
        [Route("deletebus/{BusId}")]
        public IActionResult DeleteBus(int BusId) {
            try {
                var data = db.buses.Where(buses => buses.BusId == BusId).FirstOrDefault();
                db.buses.Remove(data);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex) {
                return BadRequest(ex.InnerException.Message);
            }
        
        }
    }
}


