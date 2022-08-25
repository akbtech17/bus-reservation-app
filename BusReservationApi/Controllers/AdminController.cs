using BusReservationApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace BusReservationApi.Controllers
{
    public class Admin {
        public int AdminId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        BusReservationContext db = new BusReservationContext();

        // GET: api/<AdminSigninController>
        // to get the details of all admins table.
        [HttpGet]
        [Route("list")]
        public IActionResult GetAdmin()
        {
            try
            {
                var data = db.Admins.ToList();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        // GET api/<AdminSigninController>/5
        // to get the details of the specific admin
        [HttpGet("{id}")]
        [Route("list/{id}")]
        public IActionResult GetAdmin(int id)
        {
            try
            {
                var data = db.Admins.Where(admin => admin.AdminId == id).FirstOrDefault();
                return Ok(data);
            }
            catch (Exception ex) 
            {
                return BadRequest(ex.InnerException.Message);    
            }
        }

        [HttpPost]
        [Route("validate")]
        public IActionResult PostAdmin(string Email, string Password) {
            if (ModelState.IsValid) {
                try
                {
                    var data = db.Admins.Where(admin => admin.Email == Email && admin.Password == Password).FirstOrDefault(); 
                    if (data != null) return Ok(data);
                    else return NotFound("Admin is not registered");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return BadRequest("Something went wrong");
        }
    }
}
