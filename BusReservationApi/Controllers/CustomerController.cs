using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusReservationApi.Models;



namespace BusReservationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        BusReservationContext db = new BusReservationContext();
        [HttpGet]
        public IActionResult GetCust()
        {
            try
            {
                var data = db.Customers.ToList();
                return Ok(data);
            }
            catch (Exception e)
            {
                return BadRequest(e.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("{CustomerId}")]
        public IActionResult GetCust(int CustomerId)
        {
            try
            {
                var data = db.Customers.Where(cust => cust.CustomerId == CustomerId).FirstOrDefault();
                return Ok(data);
            }
            catch (Exception e)
            {
                return BadRequest(e.InnerException.Message);
            }
        }

        [HttpPost]
        [Route("validate")]
        public IActionResult PostCust(Credentials creds)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var data = db.Customers.Where(cust => cust.Email == creds.Email && cust.Password == creds.Password).FirstOrDefault();
                    if (data != null) return Ok(data);
                    else return NotFound("Customer is not registered");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return BadRequest("Something went wrong");
        }

        [HttpPut]
        [Route("editcust/{CustomerId}")]
        public IActionResult PutCust(int CustomerId, Customer Cust)
        {
            var data = db.Customers.Where(cust => cust.CustomerId == CustomerId).FirstOrDefault();
            try
            {
                if (ModelState.IsValid)
                {
                    data.FirstName = Cust.FirstName;
                    data.LastName = Cust.LastName;
                    data.Dob = Cust.Dob;
                    data.Gender = Cust.Gender;
                    data.Mobile = Cust.Mobile;
                    data.Email = Cust.Email;
                    data.Password = Cust.Password;
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
        public IActionResult PostCust(Customer Cust)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    db.Customers.Add(Cust);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
            db.SaveChanges();
            return Created("Record Successfully Added", Cust);
        }

        [HttpDelete]
        [Route("{CustomerId}")]
        public IActionResult DeleteCust(int CustomerId)
        {
            try
            {
                var data = db.Customers.Where(cust => cust.CustomerId == CustomerId).FirstOrDefault();
                db.Customers.Remove(data);
                db.SaveChanges();
                return Ok("Successfully deleted the Customer");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpPut]
        [Route("changepassword")]
        public IActionResult DeleteCust(ChangePasswordQuery query)
        {
            try
            {
                var data = db.Customers.Where(cust => cust.CustomerId == query.customerId && cust.Password == query.oldPassword).FirstOrDefault();
                if (data == null) return NotFound("Credentials are Invalid!");
                data.Password = query.newPassword;
                db.SaveChanges();
                return Ok("Password change success!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("wallet/{customerId}")]
        public IActionResult GetWalletAmount(int customerId)
        {
            try
            {
                var data = db.Customers.Where(cust => cust.CustomerId == customerId).FirstOrDefault();
                if (data == null) return NotFound("Customer is not registered!");

                var wallet = data.Wallet;
                return Ok(wallet);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
        }
    }
    public class ChangePasswordQuery
    {
        public int customerId { get; set; }
        public string oldPassword { get; set; }
        public string newPassword { get; set; }
    }
}