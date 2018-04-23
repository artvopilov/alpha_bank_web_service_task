using System.Collections.Generic;
using Microsoft.Extensions.Logging.AzureAppServices;
using ProductService.Objects;
using System.Configuration;
using System.Linq;
using ProductService.Models.Objects;

namespace ProductService.Models {
    public static class ProductsStorage {
        public static List<Product> Products { get; private set; } = new List<Product>();
        public static ProductsDetails Details { get; private set; } = new ProductsDetails();

        public static void Save(IEnumerable<Product> products) {
            lock (Products) lock (Details) {
                Products = products.ToList();
                Details = new ProductsDetails {
                    CountP = Products.Count,
                    MaxPrice = Products.Max(p => p.Price),
                    MinPrice = Products.Min(p => p.Price),
                    AvgPrice = Products.Average(p => p.Price)
                };
            }
        }
    }
}