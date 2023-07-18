using TourismAgencyBack.Domain.BoatAggregate;
using TourismAgencyBack.Domain.Common.Models;
using TourismAgencyBack.Domain.DestinationsAggregate.ValueObjects;

namespace TourismAgencyBack.Domain.DestinationsAggregate;

public sealed class Destination : AggregateRoot<DestinationId>
{
    // EF requirement
    private Destination()
    {
    }

    private Destination(
        DestinationId destinationId,
        string name
    ) : base(destinationId)
    {
        Name = name;
    }

    public static Destination Create(
        string Name
    )
    {
        return new(
            DestinationId.CreateUnique(),
            Name
        );
    }

    public static Destination Create(
        Guid id,
        string Name
    )
    {
        return new(
            DestinationId.Create(id),
            Name
        );
    }
    private readonly List<Boat> _boats = new();
    public IReadOnlyList<Boat> Boats => _boats.AsReadOnly();
    public string Name { get; private set; } = null!;
}