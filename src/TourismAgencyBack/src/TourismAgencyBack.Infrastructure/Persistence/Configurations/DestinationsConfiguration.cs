using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TourismAgencyBack.Domain.DestinationsAggregate;
using TourismAgencyBack.Domain.DestinationsAggregate.ValueObjects;

namespace TourismAgencyBack.Infrastructure.Persistence.Configurations;

public class DestinationsConfiguration : IEntityTypeConfiguration<Destination>
{
    public void Configure(EntityTypeBuilder<Destination> builder)
    {
        ConfigureDestinationsTable(builder);
        ConfigureDestinationData(builder);
    }

    private void ConfigureDestinationsTable(EntityTypeBuilder<Destination> builder)
    {
        builder.ToTable("Destinations");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedNever()
            .HasConversion(
                id => id.Value,
                value => DestinationId.Create(value))
            .IsRequired();

        builder.Property(x => x.Name)
            .HasMaxLength(100)
            .IsRequired();

        builder.HasMany(x => x.Boats)
            .WithOne(x => x.Destination)
            .HasForeignKey(x => x.DestinationId);
    }

    private void ConfigureDestinationData(EntityTypeBuilder<Destination> builder)
    {
        builder.HasData(
            Destination.Create(Guid.Parse("8bfed66a-1ca4-46e7-8181-5e117f1ddc66"), "Parque Nacional Morrocoy"),
            Destination.Create(Guid.Parse("ab012a75-da36-4bfc-9cbc-924bc5551805"), "Margarita"),
            Destination.Create(Guid.Parse("602c6e28-5acb-48f0-b85c-bbe09a21cf37"), "Caracas")
        );
    }
}