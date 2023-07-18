using FluentResults;
using MediatR;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;
using TourismAgencyBack.Domain.BoatAggregate;

namespace TourismAgencyBack.Application.Boats.Queries.GetAllBoat;

public class GetAllBoatQueryHandler : IRequestHandler<GetAllBoatQuery, Result<IEnumerable<Boat>>>
{
    private readonly IBoatRepository _repo;

    public GetAllBoatQueryHandler(IBoatRepository repo)
    {
        _repo = repo;
    }

    public async Task<Result<IEnumerable<Boat>>> Handle(GetAllBoatQuery request, CancellationToken cancellationToken)
    {
        IEnumerable<Boat> boats = await _repo.GetAll(false);
        return Result.Ok(boats);
    }
}