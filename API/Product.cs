

namespace IA_API.Models
{


    public class Product
    {
        public int Id { get; set; }
        public DateTime PurchaseDate { get; set; }
        public DateTime AcceptanceDate { get; set; }
        public string? Status { get; set; }
        public string Name { get; set; }
        public string PurchaseArticle { get; set; }
        public decimal Amount { get; set; }
        public int Quantity { get; set; }

    }
}
