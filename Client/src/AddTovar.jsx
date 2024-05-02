import React, { useState } from 'react';
import './AddTovar.css'; // Подключаем файл со стилями

function AddTovarPage() {
  const [formData, setFormData] = useState({
    name: '',
    purchaseDate: '',
    acceptanceDate: '',
    status: '',
    purchaseArticle: '',
    quantity: '',
    pricePerUnit: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете отправить данные formData на сервер
    // Например, с помощью fetch или другой библиотеки для работы с HTTP запросами
    // После успешного добавления товара вы можете выполнить дополнительные действия, если это необходимо
  };

  return (
    <div className="AddTovarPageContainer">
      <div className="AddTovarForm">
        <h2>Добавить товар</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Название:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Дата покупки:
            <input type="date" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} />
          </label>
          <label>
            Дата принятия на учёт:
            <input type="date" name="acceptanceDate" value={formData.acceptanceDate} onChange={handleChange} />
          </label>
          <label>
            Статус:
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="1">Принят</option>
              <option value="0">Не принят</option>
            </select>
          </label>
          <label>
            Статья закупки:
            <input type="text" name="purchaseArticle" value={formData.purchaseArticle} onChange={handleChange} />
          </label>
          <label>
            Количество:
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
          </label>
          <label>
            Цена за единицу товара:
            <input type="number" name="pricePerUnit" value={formData.pricePerUnit} onChange={handleChange} />
          </label>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
}

export default AddTovarPage;
