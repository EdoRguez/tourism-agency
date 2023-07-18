using TourismAgencyBack.Domain.Common.Models;

namespace TourismAgencyBack.Domain.BoatAggregate.ValueObjects;

public sealed class BoatId : ValueObject
{
    public Guid Value { get; }

    private BoatId(Guid value)
    {
        Value = value;
    }

    public static BoatId CreateUnique()
    {
        return new BoatId(Guid.NewGuid());
    }

    public static BoatId Create(Guid value)
    {
        return new BoatId(value);
    }

    public override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }
}