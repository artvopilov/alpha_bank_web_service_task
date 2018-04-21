using System.Collections.Generic;
using Microsoft.Extensions.Logging.AzureAppServices;
using ProductService.Objects;
using System.Configuration;
using System.Linq;

namespace ProductService.Models {
    public static class ProductsStorage {
        public static List<Product> Products { get; private set; } = new List<Product>();

        public static void Save(IEnumerable<Product> products) {
            lock (Products) {
                Products = products.ToList();
            }
        }
    }
}