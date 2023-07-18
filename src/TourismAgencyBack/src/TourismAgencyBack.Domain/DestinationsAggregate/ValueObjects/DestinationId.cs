using TourismAgencyBack.Domain.Common.Models;

namespace TourismAgencyBack.Domain.DestinationsAggregate.ValueObjects;

public sealed class DestinationId : ValueObject
{
    public Guid Value { get; }

    private DestinationId(Guid value)
    {
        Value = value;
    }

    public static DestinationId CreateUnique()
    {
        return new DestinationId(Guid.NewGuid());
    }

    public static DestinationId Create(Guid value)
    {
        return new DestinationId(value);
    }

    public override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }
}