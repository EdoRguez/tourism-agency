using Microsoft.Extensions.DependencyInjection;
using FluentValidation;
using MediatR;
using TourismAgencyBack.Application.Common.Behaviors;

namespace TourismAgencyBack.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        var assembly = typeof(DependencyInjection).Assembly;

        services.AddMediatR(configuration => {
            configuration.RegisterServicesFromAssemblies(assembly);
        });

        services.AddValidatorsFromAssembly(assembly);
        services.AddScoped(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));

        return services;
    }
}