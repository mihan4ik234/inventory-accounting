import { useState } from "react";
import "./AddTovar.css"; // Подключаем файл со стилями

function AddTovarPage() {
  const [formData, setFormData] = useState({
    id: 0,
    purchaseDate: new Date().toISOString(),
    acceptanceDate: new Date().toISOString(),
    status: "string",
    name: "string",
    purchaseArticle: "string",
    amount: 0,
    quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5052/api/Products", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      // Дополнительные действия после успешного добавления товара
      console.log("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="AddTovarPageContainer">
      <div className="AddTovarForm">
        <h2>Добавить товар</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Название:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Дата покупки:
            <input
              type="date"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Дата принятия на учёт:
            <input
              type="date"
              name="acceptanceDate"
              value={formData.acceptanceDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Статус:
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="0">Pending</option>
              <option value="1">Accepted</option>
            </select>
          </label>
          <label>
            Статья закупки:
            <input
              type="text"
              name="purchaseArticle"
              value={formData.purchaseArticle}
              onChange={handleChange}
            />
          </label>
          <label>
            Количество:
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </label>
          <label>
            Сумма:
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
}

export default AddTovarPage;
