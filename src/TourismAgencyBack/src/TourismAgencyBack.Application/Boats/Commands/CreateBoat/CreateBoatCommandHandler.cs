using FluentResults;
using MediatR;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;
using TourismAgencyBack.Domain.BoatAggregate;
using TourismAgencyBack.Domain.BoatAggregate.Entities;
using TourismAgencyBack.Domain.BoatEquipmentAggregate;
using TourismAgencyBack.Domain.BoatTypeAggregate.ValueObjects;
using TourismAgencyBack.Domain.DestinationsAggregate.ValueObjects;

namespace TourismAgencyBack.Application.Boats.Commands.CreateBoat;

public class CreateBoatCommandHandler : IRequestHandler<CreateBoatCommand, Result<Boat>>
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IBoatRepository _boatRepository;
    private readonly IBoatEquipmentRepository _boatEquipmentRepository;

    public CreateBoatCommandHandler(IBoatRepository boatRepository, IBoatEquipmentRepository boatEquipmentRepository, IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
        _boatRepository = boatRepository;
        _boatEquipmentRepository = boatEquipmentRepository;
    }

    public async Task<Result<Boat>> Handle(CreateBoatCommand request, CancellationToken cancellationToken)
    {
        await Task.CompletedTask;

        // Retrieve request.boatEquipmentIds from DB
        List<BoatEquipment> boatEquipments = await _boatEquipmentRepository.GetBoatsEquipments(request.BoatEquipmentIds.ConvertAll(x => Guid.Parse(x)));

        // Create Boat
        var boat = Boat.Create(
            request.Name,
            request.Description,
            request.NumberPeople,
            request.MainImageUrl,
            request.BasePrice,
            DestinationId.Create(Guid.Parse(request.DestinationId)),
            BoatTypeId.Create(Guid.Parse(request.BoatTypeId)),
            request.ImageUrls.ConvertAll(x => BoatImageUrl.Create(x)),
            boatEquipments
        );

        _boatRepository.Add(boat);
        await _unitOfWork.SaveChangesAsync();

        return boat;
    }
}