using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using WebApi.Models;

namespace WebApi.Data
{
    public class IssueDbContext:DbContext
    {
        public IssueDbContext(DbContextOptions<IssueDbContext> options):base(options)
        {
        }

        public DbSet<Issue> Issues { get; set; }

    }
}

