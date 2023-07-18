using TourismAgencyBack.Domain.Common.Models;

namespace TourismAgencyBack.Domain.BoatAggregate.ValueObjects;

public sealed class BoatImageUrlId : ValueObject
{
    public Guid Value { get; }

    private BoatImageUrlId(Guid value)
    {
        Value = value;
    }

    public static BoatImageUrlId CreateUnique()
    {
        return new BoatImageUrlId(Guid.NewGuid());
    }

    public static BoatImageUrlId Create(Guid value)
    {
        return new BoatImageUrlId(value);
    }

    public override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }
}