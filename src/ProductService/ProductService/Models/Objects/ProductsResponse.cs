using System.Collections.Generic;
using ProductService.Objects;

namespace ProductService.Models.Objects {
    public class ProductsResponse {
        public List<Product> Products { get; set; }
        public ProductsDetails Details { get; set; }
    }
}