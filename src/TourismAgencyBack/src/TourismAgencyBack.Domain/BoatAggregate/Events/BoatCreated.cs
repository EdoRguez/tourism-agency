using TourismAgencyBack.Domain.Common.Models;

namespace TourismAgencyBack.Domain.BoatAggregate.Events;

public record BoatCreated(Boat boat) : IDomainEvent;