using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TourismAgencyBack.Domain.BoatAggregate;
using TourismAgencyBack.Domain.BoatAggregate.Entities;
using TourismAgencyBack.Domain.BoatAggregate.ValueObjects;
using TourismAgencyBack.Domain.BoatTypeAggregate;
using TourismAgencyBack.Domain.BoatTypeAggregate.ValueObjects;
using TourismAgencyBack.Domain.DestinationsAggregate;
using TourismAgencyBack.Domain.DestinationsAggregate.ValueObjects;

namespace TourismAgencyBack.Infrastructure.Persistence.Configurations;

public class BoatsConfiguration : IEntityTypeConfiguration<Boat>
{
    public void Configure(EntityTypeBuilder<Boat> builder)
    {
        ConfigureBoatsTable(builder);
        ConfigureBoatImageUrlsTable(builder);
    }

    private void ConfigureBoatsTable(EntityTypeBuilder<Boat> builder)
    {
        builder.ToTable("Boats");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedNever()
            .HasConversion(
                id => id.Value,
                value => BoatId.Create(value))
            .IsRequired();

        builder.Property(x => x.Name)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(x => x.Description)
            .HasMaxLength(200)
            .IsRequired();

        builder.Property(x => x.NumberPeople)
            .IsRequired();

        builder.Property(x => x.MainImageUrl)
            .IsRequired();

        builder.Property(x => x.BasePrice)
            .HasPrecision(18, 2)
            .IsRequired();

        builder.Property(x => x.DestinationId)
            .HasConversion(
                id => id.Value,
                value => DestinationId.Create(value))
            .IsRequired();

        builder.HasOne<Destination>()
            .WithMany()
            .HasForeignKey(x => x.DestinationId);

        builder.Property(x => x.BoatTypeId)
            .HasConversion(
                id => id.Value,
                value => BoatTypeId.Create(value))
            .IsRequired();

        builder.HasOne<BoatType>()
            .WithMany()
            .HasForeignKey(x => x.BoatTypeId);

        builder.HasMany(x => x.BoatEquipments)
            .WithMany(x => x.Boats);
    }

    private void ConfigureBoatImageUrlsTable(EntityTypeBuilder<Boat> builder)
    {
        builder.OwnsMany(x => x.BoatImageUrls, y =>
        {
            y.ToTable("BoatImageUrls");

            y.WithOwner().HasForeignKey("BoatId");

            y.HasKey(nameof(BoatImageUrl.Id), "BoatId");

            y.Property(z => z.Id)
                .HasColumnName("BoatImageUrlId")
                .ValueGeneratedNever()
                .HasConversion(
                    id => id.Value,
                    value => BoatImageUrlId.Create(value)
                );

            y.Property(z => z.ImageUrl)
                .HasMaxLength(50)
                .IsRequired();
        });

        builder.Metadata.FindNavigation(nameof(Boat.BoatImageUrls))!
            .SetPropertyAccessMode(PropertyAccessMode.Field);
    }
}