namespace TourismAgencyBack.Application.Common.Interfaces.Persistence;

public interface IBoatTypeRepository
{
    Task<bool> BoatTypeIdExist(Guid boatTypeId);
}