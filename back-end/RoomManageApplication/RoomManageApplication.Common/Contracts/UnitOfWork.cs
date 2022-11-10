using Microsoft.EntityFrameworkCore;
using RoomManageApplication.Common.Contracts.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoomManageApplication.Common.Contracts;
public class UnitOfWork<TContext> : IUnitOfWork<TContext> where TContext : DbContext
{
    private readonly TContext _context;

    public UnitOfWork(TContext context)
    {
        _context = context;
    }

    public void Dispose() => _context.Dispose();

    public Task<int> CommitAsync() => _context.SaveChangesAsync();
}
