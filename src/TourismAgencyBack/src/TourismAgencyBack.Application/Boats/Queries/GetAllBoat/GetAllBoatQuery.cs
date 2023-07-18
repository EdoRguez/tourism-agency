using FluentResults;
using MediatR;
using TourismAgencyBack.Domain.BoatAggregate;

namespace TourismAgencyBack.Application.Boats.Queries.GetAllBoat;

public record GetAllBoatQuery() : IRequest<Result<IEnumerable<Boat>>>;