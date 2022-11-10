using RoomManageApplication.Common.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoomManageApplication.Data.Entities
{
    public class AccountManager : EntityAuditBase<long>
    {
        public string Password { get; set; }
        public string Username { get; set; }
    }
}
