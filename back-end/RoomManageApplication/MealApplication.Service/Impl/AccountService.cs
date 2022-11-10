using MealApplication.Service.Interface;
using RoomManageApplication.Common.Contracts;
using RoomManageApplication.Common.Contracts.Interfaces;
using RoomManageApplication.Data;
using RoomManageApplication.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MealApplication.Service.Impl
{
    public class AccountService : RepositoryBaseAsync<AccountManager, long, RoomDbContext>, IAccountService
    {
        public AccountService(RoomDbContext dbContext, IUnitOfWork<RoomDbContext> unitOfWork) : base(dbContext, unitOfWork)
        {

        }
    }
}
