using FluentResults;
using MediatR;
using TourismAgencyBack.Application.Common.Errors;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;
using TourismAgencyBack.Domain.BoatAggregate;

namespace TourismAgencyBack.Application.Boats.Commands.DeleteBoat;

public class DeleteBoatCommandHandler : IRequestHandler<DeleteBoatCommand, Result<Boat>>
{
    private readonly IBoatRepository _repo;
    private readonly IUnitOfWork _unitOfWork;

    public DeleteBoatCommandHandler(IBoatRepository repo, IUnitOfWork unitOfWork)
    {
        _repo = repo;
        _unitOfWork = unitOfWork;
    }
    public async Task<Result<Boat>> Handle(DeleteBoatCommand request, CancellationToken cancellationToken)
    {
        var boat = await _repo.Get(request.Id, false);

        if(boat is null)
            return Result.Fail<Boat>(new[] { new NotFoundError() });

        _repo.Delete(boat);
        await _unitOfWork.SaveChangesAsync();

        return Result.Ok();
    }
}