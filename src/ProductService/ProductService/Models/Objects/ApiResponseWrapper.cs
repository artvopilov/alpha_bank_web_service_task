using System.Collections.Generic;
using ProductService.Objects;

namespace ProductService.Models.Objects {
    public class ApiResponseWrapper {
        public int Count { get; set; }
        public List<Product> Products { get; set; }
        public string Next { get; set; }
    }
}