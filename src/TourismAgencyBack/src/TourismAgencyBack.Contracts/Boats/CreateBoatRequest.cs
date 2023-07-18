namespace TourismAgencyBack.Contracts.Boats;

public record CreateBoatRequest(
    string Name,
    string Description,
    short NumberPeople,
    string MainImageUrl,
    decimal BasePrice,
    string DestinationId,
    string BoatTypeId,
    List<string> BoatImageUrls,
    List<string> BoatEquipmentIds
);