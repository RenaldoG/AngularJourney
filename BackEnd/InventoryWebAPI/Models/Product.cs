using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InventoryWebAPI.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Price { get; set; }

        public string Amount { get; set; }

        public bool IsStocked { get; set; }
    }
}