using TourismAgencyBack.Domain.BoatAggregate;
using TourismAgencyBack.Domain.BoatTypeAggregate.ValueObjects;
using TourismAgencyBack.Domain.Common.Models;

namespace TourismAgencyBack.Domain.BoatTypeAggregate;

public sealed class BoatType : AggregateRoot<BoatTypeId>
{
    public string Name {get; private set; }

    // EF Requirement
    private BoatType()
    {
    }

    private BoatType(BoatTypeId boatTypeId, string name)
        : base(boatTypeId)
    {
        Name = name;
    }

    public static BoatType Create(
        string name
    )
    {
        return new BoatType(
            BoatTypeId.CreateUnique(),
            name
        );
    }

    public static BoatType Create(
        Guid id,
        string name
    )
    {
        return new BoatType(
            BoatTypeId.Create(id),
            name
        );
    }

    private readonly List<Boat> _boats = new();
    public IReadOnlyList<Boat> Boats => _boats.AsReadOnly();
}