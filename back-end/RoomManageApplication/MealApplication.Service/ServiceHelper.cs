using Autofac;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace MealApplication.Service
{
    public static class ServiceHelper
    {
        public static ContainerBuilder RegisterWebServices(this ContainerBuilder container)
        {
            List<Dependency> dependencies = new List<Dependency>()
            {
                //new Dependency(typeof(BaseServices<eCMSDbContext>), typeof(IBaseServices<eCMSDbContext>))
            };

            var assembly = Assembly.GetExecutingAssembly();
            var allClass = assembly.GetTypes()
                .Where(e => !string.IsNullOrEmpty(e.Namespace) && e.Namespace.EndsWith(".Impl"))
                .Where(e => e.IsClass && !e.IsAbstract && e.DeclaringType == null)
                .ToArray();

            if (allClass.Length > 0)
                dependencies.AddRange(allClass.Select(e => new Dependency(e)));

            dependencies.ForEach(e => container.RegisterType(e.Implement).As(e.Interface));
            return container;
        }
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {

            List<Dependency> dependencies = new List<Dependency>()
            {
                //new Dependency(typeof(BaseServices<eCMSDbContext>), typeof(IBaseServices<eCMSDbContext>))
            };

            var assembly = Assembly.GetExecutingAssembly();
            var allClass = assembly.GetTypes()
                .Where(e => !string.IsNullOrEmpty(e.Namespace) && e.Namespace.EndsWith(".Impl"))
                .Where(e => e.IsClass && !e.IsAbstract && e.DeclaringType == null)
                .ToArray();

            if (allClass.Length > 0)
                dependencies.AddRange(allClass.Select(e => new Dependency(e)));

            // dependencies.ForEach(e => services.AddScoped(e.Interface, e.Implement));
            foreach (var d in dependencies)
            {
                services.AddScoped(d.Interface, d.Implement);
            }
            return services;
        }
    }
}
