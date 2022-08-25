using System;
using System.Collections.Generic;

#nullable disable

namespace BusReservationApi.Models
{
    public partial class Seat
    {
        public string SeatNo { get; set; }
        public int Row { get; set; }
        public int Col { get; set; }
    }
}
