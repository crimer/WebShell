﻿using Microsoft.EntityFrameworkCore;
using WebShellApi.Models.Models;

namespace WebShellApi.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<Command> Commands { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
    }
}
