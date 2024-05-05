import React from 'react';
import Filter from './Filter';
import Spisok1 from "./spisokspisannye"; // Обновляем импорт
function SpisannyePage() {
  return (
    <div className="SpisannyePage">
      <Filter />
      <Spisok1 />
    </div>
  );
}

export default SpisannyePage;
