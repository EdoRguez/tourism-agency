using Microsoft.EntityFrameworkCore;
using TourismAgencyBack.Application.Common.Interfaces.Persistence;
using TourismAgencyBack.Domain.BoatAggregate;
using TourismAgencyBack.Infrastructure.Persistence.Extensions;

namespace TourismAgencyBack.Infrastructure.Persistence.Repository;

public class BoatRepository : IBoatRepository
{
    private readonly AppDbContext _dbContext;

    public BoatRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public void Add(Boat boat)
    {
        _dbContext.Add(boat);
    }

    public async Task<bool> BoatExists(string name)
    {
        await Task.CompletedTask;
        return _dbContext.Boats.Any(x => x.Name.ToLower() == name.ToLower());
    }

    public async Task<Boat?> Get(Guid id, bool trackChanges = false, string[]? includes = null)
    {
        if(trackChanges)
        {
            var boatsList = await _dbContext.Boats.IncludeMultiple(includes).ToListAsync();
            return boatsList.SingleOrDefault(x => x.Id.Value == id);
        }

        var boats = await _dbContext.Boats.IncludeMultiple(includes).AsNoTracking().ToListAsync();
        return boats.SingleOrDefault(x => x.Id.Value == id);
    }

    public async Task<IEnumerable<Boat>> GetAll(bool trackChanges = false, string[]? includes = null)
    {
        await Task.CompletedTask;
        if(trackChanges)
        {
            return _dbContext.Boats.IncludeMultiple(includes).AsEnumerable();
        }

        return _dbContext.Boats.AsEnumerable();
    }

    public void Delete(Boat boat)
    {
        _dbContext.Remove(boat);
    }
}