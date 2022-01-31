import React, { useState } from 'react';
import './Select.scss';

function Select() {
   const [value, setValue] = useState('');

   function chengeSelect (event) {
      setValue(event.target.value);
   }

   return <div className='select'> 
      <select className='select__option' value={value} onChange={chengeSelect}>
         <option>Цвет</option>
         <option>Желтый</option>
         <option>Фиолетовый</option>
         <option>Серый</option>
      </select>
   </div>;
}

export default Select;