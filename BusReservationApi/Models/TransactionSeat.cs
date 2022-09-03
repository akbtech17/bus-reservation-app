using System;
using System.Collections.Generic;

#nullable disable

namespace BusReservationApi.Models
{
    public partial class TransactionSeat
    {
        public int Tid { get; set; }
        public string SeatNo { get; set; }

        public virtual TransactionDetail TidNavigation { get; set; }
    }
}
