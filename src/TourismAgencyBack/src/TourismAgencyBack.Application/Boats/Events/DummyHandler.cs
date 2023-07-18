using MediatR;
using TourismAgencyBack.Domain.BoatAggregate.Events;

namespace TourismAgencyBack.Application.Boats.Events;

public class DummyHandler : INotificationHandler<BoatCreated>
{
    public Task Handle(BoatCreated notification, CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}
