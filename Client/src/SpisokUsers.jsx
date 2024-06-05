import { useState } from 'react';
import Filter from './Filter';
import PurchaseTableUsers from './PurchaseTableUsers';

function SpisokUsers() {
  const [filterOption, setFilterOption] = useState('');

  const handleFilterChange = (option) => {
    setFilterOption(option);
  };

  return (
    <div>
      <h1>Список покупок</h1>
      <Filter onChange={handleFilterChange} />
      <PurchaseTableUsers filterOption={filterOption} />
    </div>
  );
}

export default SpisokUsers;
