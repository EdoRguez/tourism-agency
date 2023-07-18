using TourismAgencyBack.Domain.Common.Models;

namespace TourismAgencyBack.Domain.BoatEquipmentAggregate.ValueObjects;

public sealed class BoatEquipmentId : ValueObject
{
    public Guid Value { get; }

    private BoatEquipmentId(Guid value)
    {
        Value = value;
    }

    public static BoatEquipmentId CreateUnique()
    {
        return new BoatEquipmentId(Guid.NewGuid());
    }

    public static BoatEquipmentId Create(Guid value)
    {
        return new BoatEquipmentId(value);
    }

    public override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }
}