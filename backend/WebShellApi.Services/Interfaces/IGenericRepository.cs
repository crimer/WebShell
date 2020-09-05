using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebShellApi.Services.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllCommands();
        Task<T> WriteCommand(T command);
    }
}
