using Microsoft.EntityFrameworkCore;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;
using TourismAgencyBack.Domain.BoatAggregate;
using TourismAgencyBack.Domain.BoatEquipmentAggregate;
using TourismAgencyBack.Domain.BoatTypeAggregate;
using TourismAgencyBack.Domain.Common.Models;
using TourismAgencyBack.Domain.DestinationsAggregate;
using TourismAgencyBack.Infrastructure.Persistence.Interceptors;

namespace TourismAgencyBack.Infrastructure.Persistence;

public class AppDbContext : DbContext, IAppDbContext
{
    private readonly PublishDomainEventsInterceptor _publishDomainEventsInterceptor;

    public AppDbContext(DbContextOptions<AppDbContext> options, PublishDomainEventsInterceptor publishDomainEventsInterceptor = default!)
        : base(options)
    {
        _publishDomainEventsInterceptor = publishDomainEventsInterceptor;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .Ignore<List<IDomainEvent>>()
            .ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);

        base.OnModelCreating(modelBuilder);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.AddInterceptors(_publishDomainEventsInterceptor);
        base.OnConfiguring(optionsBuilder);
    }

    public DbSet<Boat> Boats { get; set; } = null!;
    public DbSet<BoatType> BoatTypes { get; set; } = null!;
    public DbSet<Destination> Destinations { get; set; } = null!;
    public DbSet<BoatEquipment> BoatEquipments { get; set; } = null!;
}