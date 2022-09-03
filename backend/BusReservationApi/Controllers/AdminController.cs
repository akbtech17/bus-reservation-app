using BusReservationApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace BusReservationApi.Controllers
{
    public class Credentials {
        public string Email { get; set; }
        public string Password { get; set; }
    }
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

        [HttpGet]
        [Route("detail")]
        public IActionResult GetAdmin([FromQuery] string email)
        {
            try
            {
                var data = db.Admins.Where(admin => admin.Email.Equals(email)).FirstOrDefault();
                if (data == null) return NotFound(email);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpPost]
        [Route("validate")]
        public IActionResult PostAdmin(Credentials creds)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var data = db.Admins.Where(admin => admin.Email == creds.Email && admin.Password == creds.Password).FirstOrDefault();
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
