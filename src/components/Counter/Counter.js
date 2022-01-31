import {useState} from 'react'; 
import "./Counter.scss"; 
  const Counter = () => {

  const [count, setCount] = useState(0);

  const addOne = () => setCount(count + 1);

  const takeOne = () =>{
      if (count > 0) {
        setCount(count - 1) 
      }
      };
  
  return (    
  <div className="count">
  <button className="count__btn" onClick={takeOne}>-</button>
  <h2 className="count__number" >{count}</h2>
  <button className="count__btn" onClick={addOne}>+</button>
  </div>
  );
  };

  export default Counter;