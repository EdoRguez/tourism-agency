
using TourismAgencyBack.Domain.BoatEquipmentAggregate;

namespace TourismAgencyBack.Application.Common.Interfaces.Persistence;

public interface IBoatEquipmentRepository
{
    Task<bool> BoatEquipmentIdsExist(List<Guid> boatEquipmentIds);
    Task<List<BoatEquipment>> GetBoatsEquipments(List<Guid> ids);
}