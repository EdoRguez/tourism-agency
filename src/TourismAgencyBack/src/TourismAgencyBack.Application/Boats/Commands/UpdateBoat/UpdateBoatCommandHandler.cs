using FluentResults;
using MediatR;
using TourismAgencyBack.Application.Common.Errors;
using TourismAgencyBack.Application.Common.Includes;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;
using TourismAgencyBack.Domain.BoatAggregate;
using TourismAgencyBack.Domain.BoatAggregate.Entities;
using TourismAgencyBack.Domain.BoatEquipmentAggregate;
using TourismAgencyBack.Domain.BoatTypeAggregate.ValueObjects;
using TourismAgencyBack.Domain.DestinationsAggregate.ValueObjects;

namespace TourismAgencyBack.Application.Boats.Commands.UpdateBoat;

public class UpdateBoatCommandHandler : IRequestHandler<UpdateBoatCommand, Result<Boat>>
{
    private readonly IBoatRepository _boatRepository;
    private readonly IBoatEquipmentRepository _boatEquipmentRepository;
    private IUnitOfWork _unitOfWork;

    public UpdateBoatCommandHandler(IBoatRepository boatRepository, IBoatEquipmentRepository boatEquipmentRepository, IUnitOfWork unitOfWork)
    {
        _boatRepository = boatRepository;
        _boatEquipmentRepository = boatEquipmentRepository;
        _unitOfWork = unitOfWork;
    }
    public async Task<Result<Boat>> Handle(UpdateBoatCommand request, CancellationToken cancellationToken)
    {
        string[] boatIncludes = new string[] { BoatIncludes.BoatTypes, BoatIncludes.Destinations, BoatIncludes.BoatEquipments, BoatIncludes.BoatImageUrls };
        Boat boat = await _boatRepository.Get(Guid.Parse(request.Id), true, boatIncludes);

        if(boat == null)
            return Result.Fail<Boat>(new[] { new NotFoundError() });

        // Retrieve request.boatEquipmentIds from DB
        List<BoatEquipment> boatEquipments = await _boatEquipmentRepository.GetBoatsEquipments(request.BoatEquipmentIds.ConvertAll(x => Guid.Parse(x)));

        boat.Update(
            request.Name,
            request.Description,
            request.NumberPeople,
            request.MainImageUrl,
            request.BasePrice,
            DestinationId.Create(Guid.Parse(request.DestinationId)),
            BoatTypeId.Create(Guid.Parse(request.BoatTypeId)),
            request.BoatImageUrls.ConvertAll(x => BoatImageUrl.Create(x)),
            boatEquipments
        );

        await _unitOfWork.SaveChangesAsync();

        return Result.Ok<Boat>(boat);
    }
}
