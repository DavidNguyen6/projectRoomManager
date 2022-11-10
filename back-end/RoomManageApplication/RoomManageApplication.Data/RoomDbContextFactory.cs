using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoomManageApplication.Data
{
    public class RoomDbContextFactory
    {
        private IConfigurationRoot configuration { get; }
        public RoomDbContextFactory()
        {
            IConfigurationBuilder build = new ConfigurationBuilder()
              .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
              .AddJsonFile("appsettings.json")
              .AddJsonFile($"appsettings.Development.json", optional: true)
              .AddJsonFile("appsettings.config.json", optional: true);
            configuration = build.Build();
        }
        public RoomDbContext CreateDbContext(string[] args)
        {
            var defaultConnection = configuration.GetValue<string>("DefaultConnection");
            var connectionString = configuration.GetConnectionString(defaultConnection);
            var optionsBuilder = new DbContextOptionsBuilder<RoomDbContext>();
            optionsBuilder.UseSqlServer(connectionString);
            return new RoomDbContext(optionsBuilder.Options);
        }
    }
}
