using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;
using TourismAgencyBack.Infrastructure.Persistence;
using TourismAgencyBack.Infrastructure.Persistence.Interceptors;
using TourismAgencyBack.Infrastructure.Persistence.Repository;

namespace TourismAgencyBack.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddDbContext()
            .AddPersistance();

        return services;
    }

    public static IServiceCollection AddPersistance(this IServiceCollection services)
    {
        services.AddScoped<PublishDomainEventsInterceptor>();
        services.AddScoped<IBoatRepository, BoatRepository>();
        services.AddScoped<IBoatTypeRepository, BoatTypeRepository>();
        services.AddScoped<IBoatEquipmentRepository, BoatEquipmentRepository>();
        services.AddScoped<IAppDbContext, AppDbContext>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();

        return services;
    }

    public static IServiceCollection AddDbContext(this IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options => {
            options.UseNpgsql("Server=127.0.0.1;Port=5432;Database=TourismAgencyDB;User Id=postgres;Password=admin;");
        });

        return services;
    }
}