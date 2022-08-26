using System;
using System.Collections.Generic;

#nullable disable

namespace BusReservationApi.Models
{
    public partial class Bus
    {
        public int BusId { get; set; }
        public string BusNo { get; set; }
        public int Rows { get; set; }
        public int Cols { get; set; }
        public DateTime Dtime { get; set; }
        public DateTime? Atime { get; set; }
        public string Pickup { get; set; }
        public int SeatCost { get; set; }
        public string DriverName { get; set; }
        public string DriverContact { get; set; }
        public string TypeOfBus { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
        public int Distance { get; set; }
    }
}
