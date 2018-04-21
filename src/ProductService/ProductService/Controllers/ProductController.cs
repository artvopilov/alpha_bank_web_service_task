using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProductService.Models;
using ProductService.Objects;

namespace ProductService.Controllers {
    [Route("api/products/")]
    public class ProductController : Controller {
        private readonly IConfiguration _configuration;
        
        public ProductController(IConfiguration configuration) {
            _configuration = configuration;
        }
        
        [HttpGet]
        public IActionResult Get() {
            Console.WriteLine("Received");
            
            return Ok(ProductsStorage.Products);
        }
    }
}