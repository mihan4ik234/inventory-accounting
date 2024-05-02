import React from 'react';
import Filter from './Filter';
import Spisok from "./spisok"; // Обновляем импорт
function SpisannyePage() {
  return (
    <div className="SpisannyePage">
      <Filter />
      <Spisok />
    </div>
  );
}

export default SpisannyePage;
