using System;
using System.Collections.Generic;

#nullable disable

namespace BusReservationApi.Models
{
    public partial class Passenger
    {
        public int Pid { get; set; }
        public int Tid { get; set; }
        public string Pname { get; set; }
        public int Age { get; set; }
        public string Adhaar { get; set; }
        public string Gender { get; set; }

        public virtual TransactionDetail TidNavigation { get; set; }
    }
}
