using Microsoft.EntityFrameworkCore;
using RoomManageApplication.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoomManageApplication.Data
{
    public partial class RoomDbContext : DbContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LineRoom>(entity =>
            {
                entity.HasKey(e => e.Id);
            });
            modelBuilder.Entity<AccountManager>(entity => {
                entity.HasKey(e => e.Id);
            });
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Id);
            });
            //modelBuilder.Entity<CM_Canteen>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //});

            //modelBuilder.Entity<CM_Ration>(entity => {
            //    entity.HasKey(e => e.Id);
            //    entity.HasOne(e => e.Canteen).WithMany(e => e.Rations).HasForeignKey(e => e.CanteenId).OnDelete(DeleteBehavior.NoAction);
            //});

            //modelBuilder.Entity<CM_Serving>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //    entity.HasOne(e => e.ServingsGroup).WithMany(e => e.Servings).HasForeignKey(e => e.ServingGroupId).OnDelete(DeleteBehavior.NoAction);
            //    entity.HasOne(e => e.Canteen).WithMany(e => e.Servings).HasForeignKey(e => e.CanteenId).OnDelete(DeleteBehavior.NoAction);
            //});

            //modelBuilder.Entity<CM_Dish>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //});

            //modelBuilder.Entity<CM_MenuCatalog>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //    entity.HasOne(e => e.Canteen).WithMany(e => e.MenuCatalogs).HasForeignKey(e => e.CanteenId).OnDelete(DeleteBehavior.NoAction);
            //    entity.HasOne(e => e.Serving).WithMany(e => e.MenuCatalogs).HasForeignKey(e => e.ServingId).OnDelete(DeleteBehavior.NoAction);
            //    entity.HasOne(e => e.Ration).WithMany(e => e.MenuCatalogs).HasForeignKey(e => e.RationId).OnDelete(DeleteBehavior.NoAction);
            //    entity.HasOne(e => e.Dish).WithMany(e => e.MenuCatalogs).HasForeignKey(e => e.DishId).OnDelete(DeleteBehavior.NoAction);
            //});
        }
    }
}
