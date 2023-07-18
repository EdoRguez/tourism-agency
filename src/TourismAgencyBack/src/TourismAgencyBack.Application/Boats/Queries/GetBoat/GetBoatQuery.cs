using FluentResults;
using MediatR;
using TourismAgencyBack.Domain.BoatAggregate;

namespace TourismAgencyBack.Application.Boats.Queries.GetBoat;

public record GetBoatQuery(
    Guid BoatId
) : IRequest<Result<Boat>>;