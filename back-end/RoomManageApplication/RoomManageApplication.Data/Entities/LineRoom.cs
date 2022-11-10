using RoomManageApplication.Common.Domains;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoomManageApplication.Data.Entities
{
    public class LineRoom : EntityAuditBase<long>
    {
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
    }
}
