using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebShellApi.Dtos;
using WebShellApi.Helpers;
using WebShellApi.Models.Models;
using WebShellApi.Services.Interfaces;

namespace WebShellApi.Controllers
{
    [ApiController]
    [Route("api/commands")]
    public class CommandController : ControllerBase
    {
        private readonly ICommandRepository _commandRepository;
        private readonly IProcessService _processService;
        public CommandController(ICommandRepository commandRepository, IProcessService processService)
        {
            _commandRepository = commandRepository;
            _processService = processService;
        }
        /// <summary>
        /// GET api/commands
        /// Get command history
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Command>>> GetAllCommands()
        {
            IEnumerable<Command> allCommands = await _commandRepository.GetAllCommands();
            var apiResponse = new ApiResponse<IEnumerable<Command>>(allCommands);
            apiResponse.Error = "";
            apiResponse.IsFailed = false;
            return Ok(apiResponse);
        }

        /// <summary>
        /// POST api/commands
        /// Write and execute command
        /// </summary>
        /// <param name="commandDto"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<ApiResponse<Command>>> WriteCommand([FromBody] CommandCreateDto commandDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            if (commandDto == null) return NotFound();

            var model = _processService.ExecuteProcess(commandDto.BashCommand);

            Command command = await _commandRepository.WriteCommand(model);

            var apiResponse = new ApiResponse<Command>(command);
            apiResponse.IsFailed = command.IsFailed;
            apiResponse.Error = command.IsFailed ? command.Result : "";

            return Ok(apiResponse);
        }
    }
}
