using TourismAgencyBack.Domain.BoatEquipmentAggregate.ValueObjects;
using TourismAgencyBack.Domain.BoatAggregate;
using TourismAgencyBack.Domain.Common.Models;

namespace TourismAgencyBack.Domain.BoatEquipmentAggregate;

public sealed class BoatEquipment : AggregateRoot<BoatEquipmentId>
{
    // EF Requirement
    private BoatEquipment()
    {
    }

    private BoatEquipment(
        BoatEquipmentId boatEquipmentId,
        string name,
        string iconClass
    ) : base(boatEquipmentId)
    {
        Name = name;
        IconClass = iconClass;
    }

    public static BoatEquipment Create(
        string name,
        string iconClass
    )
    {
        return new BoatEquipment(
            BoatEquipmentId.CreateUnique(),
            name,
            iconClass
        );
    }

    public static BoatEquipment Create(
        Guid id,
        string name,
        string iconClass
    )
    {
        return new BoatEquipment(
            BoatEquipmentId.Create(id),
            name,
            iconClass
        );
    }

    private readonly List<Boat> _boats = new();
    public IReadOnlyList<Boat> Boats => _boats.AsReadOnly();

    public string Name { get; private set; } = null!;
    public string IconClass { get; private set; } = null!;
}