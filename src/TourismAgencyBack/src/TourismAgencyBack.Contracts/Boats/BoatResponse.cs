namespace TourismAgencyBack.Contracts.Boats;

public record BoatResponse(
    string Id,
    string Name,
    string Description,
    short NumberPeople,
    string MainImageUrl,
    decimal BasePrice,
    BoatTypeResponse BoatType,
    DestinationResponse Destination,
    List<BoatImageUrlResponse> BoatImageUrls,
    List<BoatEquipmentResponse> BoatEquipments
);

public record BoatTypeResponse(
    string Id,
    string Name
);

public record DestinationResponse(
    string Id,
    string Name
);

public record BoatImageUrlResponse(
    string Id,
    string ImageUrl
);

public record BoatEquipmentResponse(
    string Id,
    string Name,
    string IconClass
);