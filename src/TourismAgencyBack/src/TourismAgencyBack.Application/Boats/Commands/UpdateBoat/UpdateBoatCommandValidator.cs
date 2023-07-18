using FluentValidation;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;
using TourismAgencyBack.Domain.BoatAggregate;

namespace TourismAgencyBack.Application.Boats.Commands.UpdateBoat;

public class UpdateBoatCommandValidator : AbstractValidator<UpdateBoatCommand>
{
    private readonly IBoatTypeRepository _boatTypeRepository;
    private readonly IBoatEquipmentRepository _boatEquipmentRepository;

    public UpdateBoatCommandValidator(IBoatTypeRepository boatTypeRepository, IBoatEquipmentRepository boatEquipmentRepository)
    {
        _boatTypeRepository = boatTypeRepository;
        _boatEquipmentRepository = boatEquipmentRepository;

        RuleFor(x => x.Name).NotEmpty().MaximumLength(100);

        RuleFor(x => x.Description).NotEmpty().MaximumLength(200);

        RuleFor(x => x.NumberPeople).NotNull();

        RuleFor(x => x.MainImageUrl).NotEmpty();

        RuleFor(x => x.BasePrice).NotNull();

        RuleFor(x => x.DestinationId).NotEmpty();

        RuleForEach(x => x.BoatImageUrls).NotEmpty();

        RuleFor(x => x.BoatTypeId)
            .NotNull()
            .MustAsync(BoatTypeIdExist)
            .WithMessage("BoatTypeId doesn't exist");

        RuleForEach(x => x.BoatEquipmentIds)
            .NotEmpty();

        RuleFor(x => x.BoatEquipmentIds)
            .MustAsync(BoatEquipmentIdsExist)
            .WithMessage("BoatEquipmentId doesn't exist");
    }

    private async Task<bool> BoatTypeIdExist(string id, CancellationToken token)
    {
        return await _boatTypeRepository.BoatTypeIdExist(Guid.Parse(id));
    }

    private async Task<bool> BoatEquipmentIdsExist(List<string> ids, CancellationToken token)
    {
        List<Guid> listIds = ids.ConvertAll(x => Guid.Parse(x));
        return await _boatEquipmentRepository.BoatEquipmentIdsExist(listIds);
    }
}