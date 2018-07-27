using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using ProductService.Models.Objects;
using ProductService.Objects;

namespace ProductService.Models {
    public class ApiClient {
        private readonly string _baseUrl;
        private readonly HttpClient _httpClient;

        public ApiClient(string baseUrl) {
            _baseUrl = baseUrl;
            _httpClient = new HttpClient();
        }

        public async Task<List<Product>> GetAllProducts() {
            var result = new List<Product>();

            var data = await GetDataByPageNumber(0);
            while (data.Next != null) {
                result.AddRange(data.Products);

                var pageNum = int.Parse(data.Next.Split('/').Reverse().ToArray()[0]);
                data = await GetDataByPageNumber(pageNum);
            }
            
            foreach (var product in data.Products) {
                result.Add(product);
            }
            return result;
        }

        private async Task<ApiResponseWrapper> GetDataByPageNumber(int pageNum) {
            var url = pageNum == 0 ? _baseUrl : $"{_baseUrl}{pageNum}";
             
            var data = await SendRequest(url);
            return data;
        }

        private async Task<ApiResponseWrapper> SendRequest(string url) {
            var response = await _httpClient.GetAsync(url);
            if (!response.IsSuccessStatusCode) {
                throw new HttpRequestException($"Unsuccessful request: statusCode = {response.StatusCode}");
            }

            string responseStr = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<ApiResponseWrapper>(responseStr);
        }
    }
}