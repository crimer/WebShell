using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebShellApi.Models;
using WebShellApi.Models.Models;
using WebShellApi.Services.Interfaces;

namespace WebShellApi.Services.Services
{
    public class CommandRepository : ICommandRepository
    {
        private readonly AppDbContext _appDbContext;

        public CommandRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        private IEnumerable<Command> GetMockData() => new List<Command>
        {
            new Command { BashCommand = "dir", DateTime = DateTime.Now, Id = 1, IsFailed = false, Result = "Ok" } ,
            new Command { BashCommand = "cd", DateTime = DateTime.Now, Id = 2, IsFailed = false, Result = "Good" } ,
            new Command { BashCommand = "help", DateTime = DateTime.Now, Id = 3, IsFailed = false, Result = "Nice" } ,
        };

        public async Task<IEnumerable<Command>> GetAllCommands()
        {
            return _appDbContext.Commands;

            //return GetMockData();
        }

        public async Task<Command> WriteCommand(Command command)
        {
            command.DateTime = DateTime.Now;
            var createdModel = await _appDbContext.Commands.AddAsync(command);
            await _appDbContext.SaveChangesAsync();
            return createdModel.Entity;
        }
    }
}
