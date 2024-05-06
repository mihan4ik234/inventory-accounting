import { useState, useEffect } from "react";
import "./spisok.css";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function SpisokSpisannye() {
  const [pendingPurchases, setPendingPurchases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5052/api/products")
      .then((response) => response.json())
      .then((data) => {
        const filteredPurchases = data.filter(
          (purchase) => purchase.status === 0
        );
        setPendingPurchases(filteredPurchases);
      })
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  return (
    <div className="tbl">
      <h2>Товары со статусом "Pending"</h2>
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
          {pendingPurchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{formatDate(purchase.purchaseDate)}</td>
              <td>{formatDate(purchase.acceptanceDate)}</td>
              <td>{purchase.status === 0 ? "Списано" : "Принято"}</td>
              <td>{purchase.name}</td>
              <td>{purchase.purchaseArticle}</td>
              <td>{purchase.amount}</td>
              <td>{purchase.quantity}</td>
              <td>
                {/* Добавьте кнопку для изменения статуса на Accepted */}
                <button onClick={() => handleAccept(purchase.id)}>
                  Принять
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpisokSpisannye;
