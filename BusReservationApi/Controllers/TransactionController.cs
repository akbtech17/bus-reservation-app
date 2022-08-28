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
                // find the busid
                var data = db.TransactionDetails.Where(transaction => transaction.Tid == tId).FirstOrDefault();
                //if (data == null) {
                //    return NotFound("Invalid Transaction Id");
                //}
                int busId = data.BusId;

                // find the list of seats
                var seats = db.TransactionSeats.Where(ts => ts.Tid == tId && ts.BusId == busId).ToList();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }
    }
}
