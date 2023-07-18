using FluentResults;
using MediatR;
using TourismAgencyBack.Domain.BoatAggregate;

namespace TourismAgencyBack.Application.Boats.Commands.DeleteBoat;

public record DeleteBoatCommand(Guid Id) : IRequest<Result<Boat>>;