using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TourismAgencyBack.Domain.BoatTypeAggregate;
using TourismAgencyBack.Domain.BoatTypeAggregate.ValueObjects;

namespace TourismAgencyBack.Infrastructure.Persistence.Configurations;

public class BoatTypesConfiguration : IEntityTypeConfiguration<BoatType>
{
    public void Configure(EntityTypeBuilder<BoatType> builder)
    {
        ConfigureBoatTypesTable(builder);
        ConfigureBoatTypeData(builder);
    }

    private void ConfigureBoatTypesTable(EntityTypeBuilder<BoatType> builder)
    {
        builder.ToTable("BoatTypes");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedNever()
            .HasConversion(
                id => id.Value,
                value => BoatTypeId.Create(value))
            .IsRequired();

        builder.Property(x => x.Name)
            .HasMaxLength(50)
            .IsRequired();

        builder.HasMany(x => x.Boats)
            .WithOne(x => x.BoatType)
            .HasForeignKey(x => x.BoatTypeId);
    }

    private void ConfigureBoatTypeData(EntityTypeBuilder<BoatType> builder)
    {
        builder.HasData(
            BoatType.Create(Guid.Parse("41555459-5395-4019-a142-15e6e000427f"), "Peñero"),
            BoatType.Create(Guid.Parse("d1e72775-ced0-4a76-b60a-780dc0f78978"), "Yate"),
            BoatType.Create(Guid.Parse("1427d1d6-6b22-4130-81d7-3b56f0382e9c"), "Lancha"),
            BoatType.Create(Guid.Parse("26e0da4e-3389-4dc5-8313-c6dedc5f618c"), "Catamarán"),
            BoatType.Create(Guid.Parse("39d5495b-98bf-4328-89e9-abd76c4dbebe"), "Ferry")
        );
    }
}