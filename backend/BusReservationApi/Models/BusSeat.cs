﻿using System;
using System.Collections.Generic;

#nullable disable

namespace BusReservationApi.Models
{
    public partial class BusSeat
    {
        public string SeatNo { get; set; }
        public int BusId { get; set; }
        public bool? Available { get; set; }

        public virtual Bus Bus { get; set; }
    }
}
