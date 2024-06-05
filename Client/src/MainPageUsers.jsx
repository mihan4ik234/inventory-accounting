import React from 'react';
import Filter from './Filter';
import SpisokUsers from "./SpisokUsers"; // Обновляем импорт

function MainPageUsers() {
    return (
        <div className="MainPage">
            <Filter />
            <SpisokUsers />
        </div>
    );
}

export default MainPageUsers;
