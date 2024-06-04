import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Filter from './Filter';
import MainPage from './MainPage'; // Обновляем импорт для главной страницы
import SpisannyePage from './Spisannye'; // Обновляем импорт для страницы "Списанные"
import AddTovarPage from './AddTovar'; // Обновляем импорт для страницы "Добавить товар"
import Autharization from './Autharization';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/spisannye" element={<SpisannyePage />} />
          <Route path="/add-tovar" element={<AddTovarPage />} />
          <Route path="/autharization" element={<Autharization />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
