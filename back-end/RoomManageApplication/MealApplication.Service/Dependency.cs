using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace MealApplication.Service
{
    public class Dependency
    {
        private Type _iFace = null;
        public Type Interface
        {
            get
            {
                return _iFace ?? ((TypeInfo)Implement).ImplementedInterfaces
                    .FirstOrDefault(e =>
                    e.Namespace.EndsWith(".Interface") &&
                    e.Name.EndsWith(((TypeInfo)Implement).Name));
            }
        }

        public Type Implement { get; private set; }
        public Dependency(Type implement, Type iFace = null)
        {
            Implement = implement;
            _iFace = iFace;
        }
    }
}
