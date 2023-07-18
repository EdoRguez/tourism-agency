using TourismAgencyBack.Api;
using TourismAgencyBack.Application;
using TourismAgencyBack.Infrastructure;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddPresentation().AddApplication().AddInfrastructure();
}

var app = builder.Build();
{
    app.UseHttpsRedirection();
    app.MapControllers();
    app.Run();
}
