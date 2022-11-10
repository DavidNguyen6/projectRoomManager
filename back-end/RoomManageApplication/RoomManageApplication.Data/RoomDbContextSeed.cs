using RoomManageApplication.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoomManageApplication.Data
{
    public class RoomDbContextSeed
    {
        public static async Task SeedProductAsync(RoomDbContext roomContext)
        {
            try
            {
                if (!roomContext.AccountManagers.Any())
                {
                    roomContext.AddRange(getAccounts());
                    await roomContext.SaveChangesAsync();
                }
                //if (!mealContext.CM_Canteens.Any())
                //{
                //    mealContext.AddRange(getCanteens());
                //    await mealContext.SaveChangesAsync();
                //}
                //if (!mealContext.CM_Servings.Any())
                //{
                //    mealContext.CM_Servings.AddRange(getServing());
                //    await mealContext.SaveChangesAsync();
                //}
            }
            catch (Exception ex)
            {

            }

        }

        private static IEnumerable<AccountManager> getAccounts()
        {
            return new List<AccountManager>
            {
                new AccountManager
                {
                    Username = "admin",
                    Password = "admin"
                },
                new AccountManager
                {
                    Username = "ky",
                    Password = "ky"
                },
                new AccountManager
                {
                    Username = "dung",
                    Password = "dung"
                }
            };
        }
    }
}
