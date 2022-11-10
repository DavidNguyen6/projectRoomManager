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
    public class Customer : EntityAuditBase<long>
    {
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Username { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Password { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Phone { get; set; }
        [Required]
        [Column(TypeName = "varchar(70)")]
        public string IdentityNumber { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(150)")]
        public string Address { get; set; }
        public DateTime StartContract { get; set; }
        public DateTime EndContract { get; set; }
    }
}
