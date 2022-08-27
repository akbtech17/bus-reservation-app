using BusReservationApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace BusReservationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        BusReservationContext db = new BusReservationContext();

        [HttpDelete]
        [Route("deletedata")]
        public IActionResult DeleteAllData()
        {
            try
            {
                db.Database.ExecuteSqlInterpolated($"TestDeleteAllRecords");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
            return Ok("Your DataBase is Clean Now!");
        }

        [HttpPost]
        [Route("adddata")]
        public IActionResult InsertAllData()
        {
            try
            {
                DeleteAllData();
                db.Database.ExecuteSqlInterpolated($"TestInsertAllRecords");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException.Message);
            }
            return Ok("Your DataBase is UpToDate Now!");
        }
    }
}
