using Mapster;
using TourismAgencyBack.Application.Boats.Commands.CreateBoat;
using TourismAgencyBack.Application.Boats.Commands.UpdateBoat;
using TourismAgencyBack.Contracts.Boats;
using TourismAgencyBack.Domain.BoatAggregate;
using TourismAgencyBack.Domain.BoatAggregate.Entities;
using TourismAgencyBack.Domain.BoatEquipmentAggregate;
using TourismAgencyBack.Domain.BoatTypeAggregate;
using TourismAgencyBack.Domain.DestinationsAggregate;

namespace TourismAgencyBack.Api.Common.Mapping;

public class BoatMappingConfig : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<CreateBoatRequest, CreateBoatCommand>();

        config.NewConfig<UpdateBoatRequest, UpdateBoatCommand>();

        config.NewConfig<BoatType, BoatTypeResponse>()
            .Map(dest => dest.Id, src => src.Id.Value);

        config.NewConfig<BoatEquipment, BoatEquipmentResponse>()
            .Map(dest => dest.Id, src => src.Id.Value);

        config.NewConfig<Destination, DestinationResponse>()
            .Map(dest => dest.Id, src => src.Id.Value);

        config.NewConfig<BoatImageUrl, BoatImageUrlResponse>()
            .Map(dest => dest.Id, src => src.Id.Value);

        config.NewConfig<Boat, BoatResponse>()
            .Map(dest => dest.Id, src => src.Id.Value);
    }
}
