using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BusReservationApi.Models
{
    public partial class BusReservationContext : DbContext
    {
        public BusReservationContext()
        {
        }

        public BusReservationContext(DbContextOptions<BusReservationContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Bus> buses { get; set; }
        public virtual DbSet<BusSeat> BusSeats { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Passenger> Passengers { get; set; }
        public virtual DbSet<TransactionDetail> TransactionDetails { get; set; }
        public virtual DbSet<TransactionSeat> TransactionSeats { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=.\\sqlexpress; database=BusReservation; trusted_connection=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("Admin");

                entity.HasIndex(e => e.Email, "UQ__Admin__AB6E61640652CD32")
                    .IsUnique();

                entity.Property(e => e.AdminId).HasColumnName("adminId");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(125)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("lastName");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<Bus>(entity =>
            {
                entity.HasKey(e => e.BusId)
                    .HasName("PK__Bus__A443D25DD9F889AA");

                entity.ToTable("Bus");

                entity.HasIndex(e => e.BusNo, "UQ__Bus__A443CA87F6EB81B2")
                    .IsUnique();

                entity.Property(e => e.BusId).HasColumnName("busId");

                entity.Property(e => e.ATime)
                    .HasColumnType("datetime")
                    .HasColumnName("aTime");

                entity.Property(e => e.BusNo)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("busNo");

                entity.Property(e => e.Cols)
                    .HasColumnName("cols")
                    .HasDefaultValueSql("((4))");

                entity.Property(e => e.DTime)
                    .HasColumnType("datetime")
                    .HasColumnName("dTime");

                entity.Property(e => e.Destination)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("destination");

                entity.Property(e => e.Distance).HasColumnName("distance");

                entity.Property(e => e.DriverContact)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("driverContact");

                entity.Property(e => e.DriverName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("driverName");

                entity.Property(e => e.Pickup)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("pickup");

                entity.Property(e => e.Rows)
                    .HasColumnName("rows")
                    .HasDefaultValueSql("((10))");

                entity.Property(e => e.SeatCost).HasColumnName("seatCost");

                entity.Property(e => e.Source)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("source");

                entity.Property(e => e.TypeOfBus)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("typeOfBus");
            });

            modelBuilder.Entity<BusSeat>(entity =>
            {
                entity.HasKey(e => new { e.SeatNo, e.BusId })
                    .HasName("pk_bus_seat");

                entity.ToTable("BusSeat");

                entity.Property(e => e.SeatNo)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("seatNo");

                entity.Property(e => e.BusId).HasColumnName("busId");

                entity.Property(e => e.Available).HasColumnName("available");

                entity.HasOne(d => d.Bus)
                    .WithMany(p => p.BusSeats)
                    .HasForeignKey(d => d.BusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BusSeat__busId__7167D3BD");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");

                entity.Property(e => e.CustomerId).ValueGeneratedNever();

                entity.Property(e => e.Dob).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Mobile)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(9)
                    .IsUnicode(false);

                entity.Property(e => e.Wallet).HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<Passenger>(entity =>
            {
                entity.HasKey(e => e.Pid)
                    .HasName("PK__Passenge__C57755408426DE36");

                entity.ToTable("Passenger");

                entity.Property(e => e.Pid)
                    .ValueGeneratedNever()
                    .HasColumnName("PId");

                entity.Property(e => e.Adhaar)
                    .IsRequired()
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Pname)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("PName");

                entity.Property(e => e.Tid).HasColumnName("TId");

                entity.HasOne(d => d.TidNavigation)
                    .WithMany(p => p.Passengers)
                    .HasForeignKey(d => d.Tid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Passenger__TId__7AF13DF7");
            });

            modelBuilder.Entity<TransactionDetail>(entity =>
            {
                entity.HasKey(e => e.Tid)
                    .HasName("PK__Transact__C456D749CE75CC19");

                entity.Property(e => e.Tid)
                    .ValueGeneratedNever()
                    .HasColumnName("TId");

                entity.Property(e => e.DateOfBooking).HasColumnType("datetime");

                entity.HasOne(d => d.Bus)
                    .WithMany(p => p.TransactionDetails)
                    .HasForeignKey(d => d.BusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Transacti__BusId__7720AD13");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.TransactionDetails)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Transacti__Custo__7814D14C");
            });

            modelBuilder.Entity<TransactionSeat>(entity =>
            {
                entity.HasKey(e => new { e.Tid, e.SeatNo })
                    .HasName("PK_TId");

                entity.ToTable("TransactionSeat");

                entity.Property(e => e.Tid).HasColumnName("TId");

                entity.Property(e => e.SeatNo)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.HasOne(d => d.TidNavigation)
                    .WithMany(p => p.TransactionSeats)
                    .HasForeignKey(d => d.Tid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Transaction__TId__7DCDAAA2");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
