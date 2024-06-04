import { useState } from 'react';
import Filter from './Filter';
import PurchaseTable from './PurchaseTable';

function Spisok() {
  const [filterOption, setFilterOption] = useState('');

  const handleFilterChange = (option) => {
    setFilterOption(option);
  };

  return (
    <div>
      <h1>Список покупок</h1>
      <Filter onChange={handleFilterChange} />
      <PurchaseTable filterOption={filterOption} />
    </div>
  );
}

export default Spisok;
