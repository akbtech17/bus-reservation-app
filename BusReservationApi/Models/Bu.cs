using System;
using System.Collections.Generic;

#nullable disable

namespace BusReservationApi.Models
{
    public partial class Bu
    {
        public int BusId { get; set; }
        public string BusNo { get; set; }
        public int Rows { get; set; }
        public int Cols { get; set; }
        public DateTime Dtime { get; set; }
        public DateTime? Atime { get; set; }
        public int? RouteId { get; set; }
        public string Pickup { get; set; }
        public int SeatCost { get; set; }
        public string DriverName { get; set; }
        public string DriverContact { get; set; }
        public string TypeOfBus { get; set; }

        public virtual Route Route { get; set; }
    }
}
