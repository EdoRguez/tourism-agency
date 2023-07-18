using FluentResults;
using MediatR;
using TourismAgencyBack.Domain.BoatAggregate;

namespace TourismAgencyBack.Application.Boats.Commands.CreateBoat;

public record CreateBoatCommand(
    string Name,
    string Description,
    short NumberPeople,
    string MainImageUrl,
    decimal BasePrice,
    string DestinationId,
    string BoatTypeId,
    List<string> ImageUrls,
    List<string> BoatEquipmentIds
) : IRequest<Result<Boat>>;