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
    }
}
