using System;
using System.Collections.Generic;

#nullable disable

namespace BusReservationApi.Models
{
    public partial class Route
    {
        public Route()
        {
            Bus = new HashSet<Bu>();
        }

        public int RouteId { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
        public int Distance { get; set; }

        public virtual ICollection<Bu> Bus { get; set; }
    }
}
