
using TourismAgencyBack.Domain.BoatAggregate;

namespace TourismAgencyBack.Application.Common.Interfaces.Persistence;

public interface IBoatRepository
{
    void Add(Boat boat);
    Task<Boat?> Get(Guid id, bool trackChanges = false, string[]? includes = null);
    Task<IEnumerable<Boat>> GetAll(bool trackChanges = false, string[]? includes = null);
    void Delete(Boat boat);
    Task<bool> BoatExists(string name);
}