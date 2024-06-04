import { useState } from 'react';

function Filter({ onChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className='filter'>
      <p>Сортировать по:</p>
      <select value={selectedOption} onChange={(e) => handleOptionChange(e.target.value)}>
        <option value=''>Выберите опцию</option>
        <option value='name'>А-Я</option>
        <option value='purchaseDate'>Дата преобретения</option>
        <option value='purchaseArticle'>Статья закупки</option>
        {/* Добавьте остальные опции фильтрации здесь */}
      </select>
    </div>
  );
}

export default Filter;
