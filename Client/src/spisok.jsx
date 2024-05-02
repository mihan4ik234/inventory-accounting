import React, { useState, useEffect } from 'react';
import './spisok.css'

function PurchaseTable() {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5052/api/products')
            .then(response => response.json())
            .then(data => setPurchases(data))
            .catch(error => console.error('Ошибка при получении данных:', error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:5052/api/products/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                setPurchases(purchases.filter(purchase => purchase.id !== id));
            } else {
                console.error('Ошибка при удалении покупки:', response.statusText);
            }
        })
        .catch(error => console.error('Ошибка при удалении покупки:', error));
    };

    const handleWriteOff = (id) => {
        // Действия для списания товара с указанным ID
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
                            <td>
                                <button onClick={() => handleDelete(purchase.id)} style={{ backgroundColor: 'red', borderRadius: '30px', marginRight: '5px' }}>Удалить</button>
                                <button onClick={() => handleWriteOff(purchase.id)} style={{ backgroundColor: 'gray', borderRadius: '30px' }}>Списать</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PurchaseTable;
