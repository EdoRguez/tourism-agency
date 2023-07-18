using FluentResults;
using MediatR;
using TourismAgencyBack.Domain.BoatAggregate;

namespace TourismAgencyBack.Application.Boats.Commands.UpdateBoat;

public record UpdateBoatCommand(
    string Id,
    string Name,
    string Description,
    short NumberPeople,
    string MainImageUrl,
    decimal BasePrice,
    string DestinationId,
    string BoatTypeId,
    List<string> BoatImageUrls,
    List<string> BoatEquipmentIds
) : IRequest<Result<Boat>>;