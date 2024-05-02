import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className='navbar'>
            <div className="cont">
                <p id='name'><Link to="/">ГБОУ “ОРЕНУБРГСКАЯ КАДЕТСКАЯ ШКОЛА-ИНТЕРНАТ”</Link></p>
                <p id='butt'><Link to="/">Актуальные</Link></p>
                <p id='name'>Учёт товарно-материальных ценностей</p>
                <p id='name'><Link to="/spisannye">Списанные</Link></p> {/* Добавляем ссылку на страницу "Списанные" */}
                <p id='button'><Link to="/add-tovar">Добавить товар</Link></p> {/* Добавляем ссылку на страницу "Добавить товар" */}
            </div>
        </div>
    );
}

export default Header;