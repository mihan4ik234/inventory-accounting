import { useState, useEffect } from 'react';
import './spisok.css'

function PurchaseTable() {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5052/api/products')
            .then(response => response.json())
            .then(data => setPurchases(data))
            .catch(error => console.error('Ошибка при получении данных:', error));
    }, []);

    return (
        <div className="tbl">
            <table className="purchase-table"> {/* добавляем класс для стилизации */}
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
                    </tr>
                </thead>
                <tbody>
                    {purchases.map(purchase => (
                        <tr key={purchase.id}>
                            <td>{purchase.id}</td>
                            <td>{purchase.purchaseDate}</td>
                            <td>{purchase.acceptanceDate}</td>
                            <td>{purchase.status}</td>
                            <td>{purchase.name}</td>
                            <td>{purchase.purchaseArticle}</td>
                            <td>{purchase.amount}</td>
                            <td>{purchase.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PurchaseTable;
