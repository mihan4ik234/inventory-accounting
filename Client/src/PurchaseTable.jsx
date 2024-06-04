import { useState, useEffect } from 'react';
import './spisok.css';

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

function PurchaseTable({ filterOption }) {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5052/api/products')
      .then((response) => response.json())
      .then((data) => {
        const filteredPurchases = data.filter((purchase) => purchase.status === 1);
        setPurchases(filteredPurchases);
      })
      .catch((error) => console.error('Ошибка при получении данных:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5052/api/products/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setPurchases(purchases.filter((purchase) => purchase.id !== id));
        } else {
          console.error('Ошибка при удалении покупки:', response.statusText);
        }
      })
      .catch((error) => console.error('Ошибка при удалении покупки:', error));
  };

  const handleWriteOff = (id) => {
    const product = purchases.find((purchase) => purchase.id === id);

    if (product) {
      const productData = {
        ...product,
        status: 0,
      };

      fetch(`http://localhost:5052/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
        .then((response) => {
          if (response.ok) {
            setPurchases(purchases.filter((purchase) => purchase.id !== id));
          } else {
            console.error('Ошибка при списании товара:', response.statusText);
          }
        })
        .catch((error) => console.error('Ошибка при списании товара:', error));
    } else {
      console.error('Товар с id', id, 'не найден.');
    }
  };

  const filterPurchases = (option) => {
    switch (option) {
      case 'name':
        return [...purchases].sort((a, b) => a.name.localeCompare(b.name));
      case 'purchaseDate':
        return [...purchases].sort((a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate));
      case 'purchaseArticle':
        return [...purchases].sort((a, b) => a.purchaseArticle.localeCompare(b.purchaseArticle));
      default:
        return purchases;
    }
  };

  const filteredPurchases = filterOption ? filterPurchases(filterOption) : purchases;

  return (
    <div className='tbl'>
      <table className='purchase-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Дата покупки</th>
            <th>Дата принятия</th>
            <th>Статус</th>
            <th>Название</th>
            <th>Статья покупки</th>
            <th>Сумма</th>
            <th>Количество</th>
            <th>Общая сумма</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {filteredPurchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{formatDate(purchase.purchaseDate)}</td>
              <td>{formatDate(purchase.acceptanceDate)}</td>
              <td>{purchase.status === 0 ? 'Списано' : 'Принято'}</td>
              <td>{purchase.name}</td>
              <td>{purchase.purchaseArticle}</td>
              <td>{purchase.amount}</td>
              <td>{purchase.quantity}</td>
              <td>{purchase.amount * purchase.quantity}</td>
              <td>
                <button
                  onClick={() => handleDelete(purchase.id)}
                  style={{
                    backgroundColor: 'red',
                    borderRadius: '30px',
                    marginRight: '5px',
                  }}
                >
                  Удалить
                </button>
                <button
                  onClick={() => handleWriteOff(purchase.id)}
                  style={{ backgroundColor: 'gray', borderRadius: '30px' }}
                >
                  Списать
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PurchaseTable;
