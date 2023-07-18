using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TourismAgencyBack.Domain.BoatEquipmentAggregate;
using TourismAgencyBack.Domain.BoatEquipmentAggregate.ValueObjects;

namespace TourismAgencyBack.Infrastructure.Persistence.Configurations;

public class BoatEquipmentsConfiguration : IEntityTypeConfiguration<BoatEquipment>
{
    public void Configure(EntityTypeBuilder<BoatEquipment> builder)
    {
        ConfigureBoatEquipmentsTable(builder);
        ConfigureBoatEquipmentData(builder);
    }

    private void ConfigureBoatEquipmentsTable(EntityTypeBuilder<BoatEquipment> builder)
    {
        builder.ToTable("BoatEquipments");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedNever()
            .HasConversion(
                id => id.Value,
                value => BoatEquipmentId.Create(value))
            .IsRequired();

        builder.Property(x => x.Name)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(x => x.IconClass)
            .HasMaxLength(50)
            .IsRequired();

        builder.HasMany(x => x.Boats)
            .WithMany(x => x.BoatEquipments);
    }

    private void ConfigureBoatEquipmentData(EntityTypeBuilder<BoatEquipment> builder)
    {
        builder.HasData(
            BoatEquipment.Create(Guid.Parse("10bdf658-4d44-4b08-9e9d-6e428c0d7599"), "Equipo de Sonido", "fas fa-music"),
            BoatEquipment.Create(Guid.Parse("ec0c1117-2773-4386-90f6-cf8d3e224317"), "Toldo", "fas fa-umbrella-beach")
        );
    }
}