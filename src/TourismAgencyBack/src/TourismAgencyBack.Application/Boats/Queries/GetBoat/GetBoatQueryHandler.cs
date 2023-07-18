using FluentResults;
using MediatR;
using TourismAgencyBack.Application.Common.Errors;
using TourismAgencyBack.Application.Common.Includes;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;
using TourismAgencyBack.Domain.BoatAggregate;

namespace TourismAgencyBack.Application.Boats.Queries.GetBoat;

public class GetBoatQueryHandler : IRequestHandler<GetBoatQuery, Result<Boat>>
{
    private readonly IBoatRepository _boatRepo;

    public GetBoatQueryHandler(IBoatRepository boatRepo)
    {
        _boatRepo = boatRepo;
    }

    public async Task<Result<Boat>> Handle(GetBoatQuery request, CancellationToken cancellationToken)
    {
        string[] boatIncludes = new string[] { BoatIncludes.BoatTypes, BoatIncludes.Destinations, BoatIncludes.BoatEquipments, BoatIncludes.BoatImageUrls };
        Result<Boat> boat = await _boatRepo.Get(request.BoatId, false, boatIncludes);

        if(boat.Value is null)
            return Result.Fail<Boat>(new[] { new NotFoundError() });

        return boat;
    }
}
