using MapsterMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using TourismAgencyBack.Application.Boats.Commands.CreateBoat;
using TourismAgencyBack.Application.Boats.Commands.DeleteBoat;
using TourismAgencyBack.Application.Boats.Commands.UpdateBoat;
using TourismAgencyBack.Application.Boats.Queries.GetAllBoat;
using TourismAgencyBack.Application.Boats.Queries.GetBoat;
using TourismAgencyBack.Application.Common.Errors;
using TourismAgencyBack.Contracts.Boats;

namespace TourismAgencyBack.Api.Controllers;

[Route("api/[controller]")]
public class BoatsController : ApiController
{
    private readonly ISender _mediator;
    private readonly IMapper _mapper;

    public BoatsController(ISender mediator, IMapper mapper)
    {
        _mediator = mediator;
        _mapper = mapper;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var boats = _mediator.Send(new GetAllBoatQuery());

        IEnumerable<BoatResponse> boatsResponse = _mapper.Map<IEnumerable<BoatResponse>>(boats.Result.Value);

        return Ok(boatsResponse);
    }

    [HttpGet("{id}")]
    public IActionResult Get([FromRoute] Guid id)
    {
        var boat = _mediator.Send(new GetBoatQuery(id));

        if(boat.Result.IsFailed)
        {
            var firstError = boat.Result.Errors[0];

            if(firstError is NotFoundError)
                return Problem(statusCode: (int) StatusCodes.Status404NotFound, detail: firstError.Message);

            return Problem(statusCode: (int) StatusCodes.Status409Conflict, detail: firstError.Message);
        }

        BoatResponse boatResponse = _mapper.Map<BoatResponse>(boat.Result.Value);

        return Ok(boatResponse);
    }

    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] CreateBoatRequest request
    )
    {
        var command = _mapper.Map<CreateBoatCommand>(request);

        var createBoatResult = await _mediator.Send(command);

        if(createBoatResult.IsFailed)
        {
            var firstError = createBoatResult.Errors[0];

            if(firstError is NotFoundError)
                return Problem(statusCode: (int) StatusCodes.Status404NotFound, detail: firstError.Message);

            return Problem(statusCode: (int) StatusCodes.Status409Conflict, detail: firstError.Message);
        }

        return Ok(createBoatResult.Value);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update([FromRoute] string id, [FromBody] UpdateBoatRequest request)
    {
        if(id != request.Id)
            return BadRequest();

        var command = _mapper.Map<UpdateBoatCommand>(request);

        var updateBoatResult = await _mediator.Send(command);

        if(updateBoatResult.IsFailed)
        {
            var firstError = updateBoatResult.Errors[0];

            if(firstError is NotFoundError)
                return Problem(statusCode: (int) StatusCodes.Status404NotFound, detail: firstError.Message);

            return Problem(statusCode: (int) StatusCodes.Status409Conflict, detail: firstError.Message);
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
    {
        var deleteBoatResult = await _mediator.Send(new DeleteBoatCommand(id));

        if(deleteBoatResult.IsFailed)
        {
            var firstError = deleteBoatResult.Errors[0];

            if(firstError is NotFoundError)
                return Problem(statusCode: (int) StatusCodes.Status404NotFound, detail: firstError.Message);

            return Problem(statusCode: (int) StatusCodes.Status409Conflict, detail: firstError.Message);
        }

        return NoContent();
    }
}