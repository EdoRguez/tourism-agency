using TourismAgencyBack.Domain.BoatAggregate.ValueObjects;
using TourismAgencyBack.Domain.Common.Models;

namespace TourismAgencyBack.Domain.BoatAggregate.Entities;

public class BoatImageUrl : Entity<BoatImageUrlId>
{
    public string ImageUrl { get; private set; }

    // EF Requirement
    private BoatImageUrl()
    {
    }

    private BoatImageUrl(BoatImageUrlId boatImageUrlId, string imageUrl)
        : base(boatImageUrlId)
    {
        ImageUrl = imageUrl;
    }

    public static BoatImageUrl Create(string imageUrl)
    {
        return new BoatImageUrl(
            BoatImageUrlId.CreateUnique(),
            imageUrl
        );
    }
}