using TourismAgencyBack.Domain.Common.Models;

namespace TourismAgencyBack.Domain.BoatTypeAggregate.ValueObjects;

public sealed class BoatTypeId : ValueObject
{
    public Guid Value { get; }

    private BoatTypeId(Guid value)
    {
        Value = value;
    }

    public static BoatTypeId CreateUnique()
    {
        return new BoatTypeId(Guid.NewGuid());
    }
    public static BoatTypeId Create(Guid value)
    {
        return new BoatTypeId(value);
    }

    public override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }
}