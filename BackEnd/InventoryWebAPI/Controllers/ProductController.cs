using InventoryWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InventoryWebAPI.Controllers
{
    public class ProductController : ApiController
    {
        List<Product> Inventory = new List<Product>();

        protected ProductController()
        {
            for (int i = 0; i < 50; i++)
            {
                Inventory.Add(new Product()
                {
                    Id = i,
                    Name = $"Product {i}",
                    Amount = new Random().ToString(),
                    Price = new Random().ToString(),
                    IsStocked = i > 20 ? true : false
                });
            }
        }

        // GET api/product
        public IEnumerable<Product> Get()
        {
            return Inventory;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}