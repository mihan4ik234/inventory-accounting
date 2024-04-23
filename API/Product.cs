

namespace IA_API.Models
{
    public enum ProductStatus
    {
        Accepted,
        Pending
    }

    public class Product
    {
        public int Id { get; set; }
        public DateTime PurchaseDate { get; set; }
        public DateTime AcceptanceDate { get; set; }
        public ProductStatus? Status { get; set; }
        public string Name { get; set; }
        public string PurchaseArticle { get; set; }
        public decimal Amount { get; set; }
        public int Quantity { get; set; }
        public Product()
        {
            Status = ProductStatus.Pending;
        }
    }
}
