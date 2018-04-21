using Newtonsoft.Json;

namespace ProductService.Objects {
    public class Product {
        [JsonProperty(PropertyName = "part_number")]
        public int PartNumber { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Supplier { get; set; }
        public string Vendor { get; set; }
        [JsonProperty(PropertyName = "vendor_part_numbe")]
        public int VendorPartNumber { get; set; }
        [JsonProperty(PropertyName = "vendor_description")]
        public string VendorDescription { get; set; }
        public decimal Price { get; set; }
        public string Image { get; set; }
    }
}