import { useState, useEffect } from 'react';

const Spisok = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:5052/api/products';

      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
        {products.map(product => (
          <h key={product.id}>
            {product.name} - {product.purchaseArticle}
          </h>
        ))}
    </div>
  );
};

export default Spisok;