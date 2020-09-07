using WebShellApi.Models.Models;

namespace WebShellApi.Services.Interfaces
{
    public interface IProcessService
    {
        Command ExecuteProcess(string command);
    }
}
