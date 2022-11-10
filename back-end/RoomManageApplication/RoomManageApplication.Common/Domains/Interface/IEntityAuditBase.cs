using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoomManageApplication.Common.Domains.Interface
{
    public interface IEntityAuditBase<T> : IEntityBase<T>, IAuditable
    {
    }
}
