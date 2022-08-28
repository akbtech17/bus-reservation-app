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
        [Route("passengers/{TId}")]
        public IActionResult Get(int TId)
        {
            try
            {
                var data = db.Passengers.Where(Passenger => Passenger.Tid == TId);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }
    }
}
