using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
    public class AdminSigninController : ControllerBase
    {

        static List<Admin> admins = new List<Admin> {
            new Admin{ AdminId = 1, Email = "admin1@gmail.com", Password = "admin", FirstName = "Anshul", LastName = "Bansal"},
            new Admin{ AdminId = 2, Email = "admin2@gmail.com", Password = "admin", FirstName = "Jitin", LastName = "Sharma"},
            new Admin{ AdminId = 3, Email = "admin3@gmail.com", Password = "admin", FirstName = "Divya", LastName = "Kumar"},
            new Admin{ AdminId = 4, Email = "admin4@gmail.com", Password = "admin", FirstName = "Omkar", LastName = "Bhagwat"}

        };

        // GET: api/<AdminSigninController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AdminSigninController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AdminSigninController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AdminSigninController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AdminSigninController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
