import {useState} from 'react';
import './CheckBox.scss';

const CheckBox = () => {
    const [checked, setChecked] = useState(false);
  
    const handleChange = () => {
      setChecked(!checked);
      
    };
  
    return (
      <div>
        <label className="label">
          <input
            className="checkbox"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  };

  export default CheckBox;