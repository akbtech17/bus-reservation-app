using System;
using System.Collections.Generic;

#nullable disable

namespace BusReservationApi.Models
{
    public partial class Customer
    {
        public Customer()
        {
            TransactionDetails = new HashSet<TransactionDetail>();
        }

        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? Dob { get; set; }
        public string Gender { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? Wallet { get; set; }

        public virtual ICollection<TransactionDetail> TransactionDetails { get; set; }
    }
}
