using IA_API.Models;
using IA_API.Context;

namespace IA_API.Services
{
    public interface IProductService
    {
        IEnumerable<Product> GetAllProducts();
        Product GetProductById(int id);
        void AddProduct(Product product);
        void UpdateProduct(int id, Product product);
        void DeleteProduct(int id);
    }

    public class ProductService : IProductService
    {
        private readonly ProductContext _context;

        public ProductService(ProductContext context)
        {
            _context = context;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _context.Products.ToList();
        }

        public Product GetProductById(int id)
        {
            return _context.Products.Find(id);
        }

        public void AddProduct(Product product)
        {

            _context.Products.Add(product);
            _context.SaveChanges();
        }


        public void UpdateProduct(int id, Product product)
        {
            var existingProduct = _context.Products.Find(id);
            if (existingProduct != null)
            {
                existingProduct.Name = product.Name;
                existingProduct.PurchaseDate = product.PurchaseDate;
                existingProduct.AcceptanceDate = product.AcceptanceDate;
                existingProduct.Status = product.Status;
                existingProduct.PurchaseArticle = product.PurchaseArticle;
                existingProduct.Amount = product.Amount;
                existingProduct.Quantity = product.Quantity;
                _context.SaveChanges();
            }
        }

        public void DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product != null)
            {
                _context.Products.Remove(product);
                _context.SaveChanges();
            }
        }
    }
}