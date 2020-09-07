using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace WebShellApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // �������� ��������� ��� Serilog
            var conf = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build();

            // ������������� Serilog � �������� ������
            Log.Logger = new LoggerConfiguration()
                .ReadFrom.Configuration(conf)
                .WriteTo.Console()
                .CreateLogger();

            try
            {
                Log.Information("WebShell App starting up");
                CreateHostBuilder(args).Build().Run();
            }
            catch (System.Exception ex)
            {

                Log.Fatal("WebShell App failed to start correctly");
            }
            finally{
                Log.CloseAndFlush();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
