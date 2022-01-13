using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace StoreFront.Models
{
    public class Product
    {
        [Key]
        public int ID { get; set; }

        [JsonPropertyName("title")]
        public string Name { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public double Price { get; set; }

        [JsonPropertyName("image")]
        public string ImageURL { get; set; }
    }
}
