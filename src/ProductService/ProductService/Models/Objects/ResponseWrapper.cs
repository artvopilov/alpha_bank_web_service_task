using System.Collections.Generic;

namespace ProductService.Objects {
    public class ResponseWrapper {
        public int Count { get; set; }
        public List<Product> Products { get; set; }
        public string Next { get; set; }
    }
}