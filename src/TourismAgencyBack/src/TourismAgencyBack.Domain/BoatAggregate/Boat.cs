using TourismAgencyBack.Domain.BoatAggregate.Entities;
using TourismAgencyBack.Domain.BoatAggregate.Events;
using TourismAgencyBack.Domain.BoatAggregate.ValueObjects;
using TourismAgencyBack.Domain.BoatEquipmentAggregate;
using TourismAgencyBack.Domain.BoatTypeAggregate;
using TourismAgencyBack.Domain.BoatTypeAggregate.ValueObjects;
using TourismAgencyBack.Domain.Common.Models;
using TourismAgencyBack.Domain.DestinationsAggregate;
using TourismAgencyBack.Domain.DestinationsAggregate.ValueObjects;

namespace TourismAgencyBack.Domain.BoatAggregate;

public sealed class Boat : AggregateRoot<BoatId>
{
    // EF Requirement
    private Boat()
    {
    }

    private Boat(
        BoatId boatId,
        string name,
        string description,
        short numberPeople,
        string mainImageUrl,
        decimal basePrice,
        DestinationId destinationId,
        BoatTypeId boatTypeId,
        List<BoatImageUrl> boatImageUrls,
        List<BoatEquipment> boatEquipments) : base(boatId)
    {
        Update(
            name,
            description,
            numberPeople,
            mainImageUrl,
            basePrice,
            destinationId,
            boatTypeId,
            boatImageUrls,
            boatEquipments
        );
    }

    public static Boat Create(
        string name,
        string description,
        short numberPeople,
        string mainImageUrl,
        decimal basePrice,
        DestinationId destinationId,
        BoatTypeId boatTypeId,
        List<BoatImageUrl>? imageUrls,
        List<BoatEquipment>? boatEquipments
    )
    {
        var boat = new Boat(
            BoatId.CreateUnique(),
            name,
            description,
            numberPeople,
            mainImageUrl,
            basePrice,
            destinationId,
            boatTypeId,
            imageUrls ?? new(),
            boatEquipments ?? new()
        );

        boat.AddDomainEvent(new BoatCreated(boat));

        return boat;
    }

    public void Update(
        string name,
        string description,
        short numberPeople,
        string mainImageUrl,
        decimal basePrice,
        DestinationId destinationId,
        BoatTypeId boatTypeId,
        List<BoatImageUrl> boatImageUrls,
        List<BoatEquipment> boatEquipments
    )
    {
        Name = name;
        Description = description;
        NumberPeople = numberPeople;
        MainImageUrl = mainImageUrl;
        BasePrice = basePrice;
        DestinationId = destinationId;
        BoatTypeId = boatTypeId;
        _boatImageUrls = boatImageUrls;
        _boatEquipments = boatEquipments;
    }

    private List<BoatImageUrl> _boatImageUrls = new();
    public IReadOnlyList<BoatImageUrl> BoatImageUrls => _boatImageUrls.AsReadOnly();
    private List<BoatEquipment> _boatEquipments = new();
    public IReadOnlyList<BoatEquipment> BoatEquipments => _boatEquipments.AsReadOnly();

    public string Name { get; private set; } = null!;
    public string Description { get; private set; } = null!;
    public short NumberPeople { get; private set; }
    public string MainImageUrl { get; private set; } = null!;
    public decimal BasePrice { get; private set; }
    public DestinationId DestinationId { get; private set; }
    public Destination Destination { get; private set; }
    public BoatTypeId BoatTypeId { get; private set; }
    public BoatType BoatType { get; private set; }

}