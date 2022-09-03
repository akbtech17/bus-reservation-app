using System;
using System.Collections.Generic;

#nullable disable

namespace BusReservationApi.Models
{
    public partial class TransactionDetail
    {
        public TransactionDetail()
        {
            Passengers = new HashSet<Passenger>();
            TransactionSeats = new HashSet<TransactionSeat>();
        }

        public int Tid { get; set; }
        public int BusId { get; set; }
        public int CustomerId { get; set; }
        public DateTime DateOfBooking { get; set; }
        public int TotalCost { get; set; }

        public virtual Bus Bus { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual ICollection<Passenger> Passengers { get; set; }
        public virtual ICollection<TransactionSeat> TransactionSeats { get; set; }
    }
}
