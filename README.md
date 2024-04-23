# IA_API

This is a sample API project for managing products.

## Project Structure

- `IA_API/Models`: Contains the `Product` class and `ProductStatus` enum.
- `IA_API/Context`: Contains the `ProductContext` class for database context.
- `IA_API/Services`: Contains the `IProductService` interface and `ProductService` class for managing products.
- `IA_API/Controllers`: Contains the `ProductsController` class for API endpoints.
- `IA_API/Startup.cs`: Configures services and middleware for the application.
- `IA_API/Program.cs`: Entry point for the application.

## Getting Started

1. Clone the repository: `git clone https://github.com/your-repo.git`
2. Install dependencies: `dotnet restore`
3. Update the database: `dotnet ef database update`
4. Run the application: `dotnet run`

## Endpoints

- **GET** `/api/products`: Get all products.
- **GET** `/api/products/{id}`: Get a product by ID.
- **POST** `/api/products`: Create a new product.
- **PUT** `/api/products/{id}`: Update an existing product.
- **DELETE** `/api/products/{id}`: Delete a product.

## Swagger Documentation

Swagger UI is available at `/swagger` route for API documentation.
