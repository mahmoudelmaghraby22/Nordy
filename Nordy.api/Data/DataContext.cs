using Microsoft.EntityFrameworkCore;
using Nordy.api.Models;

namespace Nordy.api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext>options):base (options){}
        public DbSet<User> Users { get; set; }
    }
} 