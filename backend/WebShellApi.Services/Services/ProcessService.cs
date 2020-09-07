using System;
using System.Diagnostics;
using WebShellApi.Models.Helpers;
using WebShellApi.Models.Models;
using WebShellApi.Services.Interfaces;

namespace WebShellApi.Services.Services
{
	public class ProcessService : IProcessService
	{
		public Command ExecuteProcess(string command)
		{
			string result = string.Empty;
			string error = string.Empty;
			Command model = new Command() { BashCommand = command };
			
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
				error = p.StandardError.ReadToEnd();
				
				p.WaitForExit();
				
				model.IsFailed = error != "" ? true : false;
				model.Result = error != "" ? error : result;
				
				return model;
			}
			catch (Exception ex)
			{

				throw;
			}
		}
	}
}
