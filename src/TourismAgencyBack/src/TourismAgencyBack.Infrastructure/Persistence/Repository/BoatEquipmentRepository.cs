using Microsoft.EntityFrameworkCore;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;
using TourismAgencyBack.Domain.BoatEquipmentAggregate;

namespace TourismAgencyBack.Infrastructure.Persistence.Repository;

public class BoatEquipmentRepository : IBoatEquipmentRepository
{
    private readonly AppDbContext _dbContext;
    public BoatEquipmentRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<bool> BoatEquipmentIdsExist(List<Guid> boatEquipmentIds)
    {
        var validIds = await _dbContext.BoatEquipments.Select(x => x.Id.Value).ToListAsync();
        return boatEquipmentIds.All(x => validIds.Contains(x));
    }

    public async Task<List<BoatEquipment>> GetBoatsEquipments(List<Guid> ids)
    {
        var boatEquipments = await _dbContext.BoatEquipments.ToListAsync();
        return boatEquipments.Where(x => ids.Contains(x.Id.Value)).ToList();
    }
}