using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BusAPI.Models
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

        public virtual DbSet<Bu> buses { get; set; }
        public virtual DbSet<BusSeat> BusSeats { get; set; }
        public virtual DbSet<Route> Routes { get; set; }
        public virtual DbSet<Seat> Seats { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=LENOVO-L340;database=BusReservation;trusted_connection=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Bu>(entity =>
            {
                entity.HasKey(e => e.BusId)
                    .HasName("PK__Bus__6A0F60B59B0C3F30");

                entity.ToTable("Bus");

                entity.Property(e => e.BusId).ValueGeneratedNever();

                entity.Property(e => e.Atime).HasColumnType("datetime");

                entity.Property(e => e.BusNo)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DriverContact)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DriverName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Dtime)
                    .HasColumnType("datetime")
                    .HasColumnName("DTime");

                entity.Property(e => e.Pickup)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TypeOfBus)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.Route)
                    .WithMany(p => p.Bus)
                    .HasForeignKey(d => d.RouteId)
                    .HasConstraintName("FK__Bus__RouteId__5EBF139D");
            });

            modelBuilder.Entity<BusSeat>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("BusSeat");

                entity.Property(e => e.Available).HasDefaultValueSql("((1))");

                entity.Property(e => e.SeatNo)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.HasOne(d => d.Bus)
                    .WithMany()
                    .HasForeignKey(d => d.BusId)
                    .HasConstraintName("FK__BusSeat__BusId__6477ECF3");

                entity.HasOne(d => d.SeatNoNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.SeatNo)
                    .HasConstraintName("FK__BusSeat__SeatNo__6383C8BA");
            });

            modelBuilder.Entity<Route>(entity =>
            {
                entity.ToTable("Route");

                entity.Property(e => e.RouteId).ValueGeneratedNever();

                entity.Property(e => e.Destination)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Source)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Seat>(entity =>
            {
                entity.HasKey(e => e.SeatNo)
                    .HasName("PK__Seat__3116FB41DEF93DBC");

                entity.ToTable("Seat");

                entity.Property(e => e.SeatNo)
                    .HasMaxLength(2)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
