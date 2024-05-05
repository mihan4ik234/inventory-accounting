import { useState, useEffect } from "react";
import "./spisok.css";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

function Spisok() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5052/api/products")
      .then((response) => response.json())
      .then((data) => setPurchases(data))
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5052/api/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setPurchases(purchases.filter((purchase) => purchase.id !== id));
        } else {
          console.error("Ошибка при удалении покупки:", response.statusText);
        }
      })
      .catch((error) => console.error("Ошибка при удалении покупки:", error));
  };

  const handleWriteOff = (id) => {
    fetch(`http://localhost:5052/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Pending" }),
    })
      .then((response) => {
        if (response.ok) {
          setPurchases(purchases.filter((purchase) => purchase.id !== id));
          fetch("http://localhost:5052/api/products?status=Pending")
            .then((response) => response.json())
            .then((data) => setPendingPurchases(data))
            .catch((error) => console.error("Ошибка при получении данных:", error));
        } else {
          console.error("Ошибка при изменении статуса:", response.statusText);
        }
      })
      .catch((error) => console.error("Ошибка при изменении статуса:", error));
  };

  return (
    <div className="tbl">
      <table className="purchase-table">
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
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{formatDate(purchase.purchaseDate)}</td>
              <td>{formatDate(purchase.acceptanceDate)}</td>
              <td>{purchase.status === 0 ? "Pending" : "Accepted"}</td>
              <td>{purchase.name}</td>
              <td>{purchase.purchaseArticle}</td>
              <td>{purchase.amount}</td>
              <td>{purchase.quantity}</td>
              <td>
                <button
                  onClick={() => handleDelete(purchase.id)}
                  style={{
                    backgroundColor: "red",
                    borderRadius: "30px",
                    marginRight: "5px",
                  }}
                >
                  Удалить
                </button>
                {purchase.status === 1 && (
                  <button
                    onClick={() => handleWriteOff(purchase.id)}
                    style={{ backgroundColor: "gray", borderRadius: "30px" }}
                  >
                    Списать
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Spisok;
