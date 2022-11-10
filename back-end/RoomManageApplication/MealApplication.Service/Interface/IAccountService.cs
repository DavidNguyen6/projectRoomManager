using RoomManageApplication.Common.Contracts.Interfaces;
using RoomManageApplication.Data;
using RoomManageApplication.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MealApplication.Service.Interface
{
    public interface IAccountService : IRepositoryBaseAsync<AccountManager, long, RoomDbContext>
    {
        
    }
}
