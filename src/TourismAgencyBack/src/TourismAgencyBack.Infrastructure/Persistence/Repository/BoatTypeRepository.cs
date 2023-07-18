using Microsoft.EntityFrameworkCore;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;

namespace TourismAgencyBack.Infrastructure.Persistence.Repository;

public class BoatTypeRepository : IBoatTypeRepository
{
    private readonly AppDbContext _dbContext;

    public BoatTypeRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<bool> BoatTypeIdExist(Guid boatTypeId)
    {
        await Task.CompletedTask;
        return _dbContext.BoatTypes.ToList().Any(x => x.Id.Value.Equals(boatTypeId));
    }
}