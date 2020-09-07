using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebShellApi.Dtos;
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

        public CommandController(ICommandRepository commandRepository,IProcessService processService)
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
            var allCommands = await _commandRepository.GetAllCommands();
            return Ok(allCommands);
        }

        /// <summary>
        /// POST api/commands
        /// Write and execute command
        /// </summary>
        /// <param name="commandDto"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<Command>> WriteCommand([FromBody] CommandCreateDto commandDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            if (commandDto == null) return NotFound();

            var res = _processService.ExecuteProcess(commandDto.BashCommand);
            Command model = new Command { BashCommand = commandDto.BashCommand, Result = res,IsFailed = false };
            var command = await _commandRepository.WriteCommand(model);

            return Ok(command);
        }
    }
}
