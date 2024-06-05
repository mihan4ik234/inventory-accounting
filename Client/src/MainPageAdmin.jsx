import React from 'react';
import Filter from './Filter';
import Spisok from "./spisok"; // Обновляем импорт

function MainPageUsers() {
    return (
        <div className="MainPage">
            <Filter />
            <Spisok />
        </div>
    );
}

export default MainPageUsers;
