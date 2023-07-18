using System.Text.Json.Serialization;
using TourismAgencyBack.Api.Common.Mapping;

namespace TourismAgencyBack.Api;

public static class DependencyInjection
{
    public static IServiceCollection AddPresentation(this IServiceCollection services)
    {
        services.AddControllers().AddJsonOptions(options =>
        {
            options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
        });
        services.AddMappings();

        return services;
    }
}