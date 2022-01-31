import './App.scss';
import Select from './components/Select/Select';
import CheckBox from './components/CheckBox/CheckBox';
//import firstImg from './img/image23.svg';
import Counter from './components/Counter/Counter';
//import secondImg from "./img/image22.jpg";
import Image from "./components/Image/Image";

function App() {
  return (
   <div className="container">
     <div className="cards">
       <div className="card">
         <div className="card__img">
          <Image/>
         </div>
         <h2 className="card__title">Шампунь</h2>
         <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
         <div className="card__changes">
           <Select/>
           <p>200 грн</p>
         </div>
         <div className="card__check-volume">
          <div className="card__check-volume_first"> <CheckBox/> <p>100мл</p></div>
          <div className="card__check-volume_first"> <CheckBox/> <p>200мл</p></div>
          <div className="card__check-volume_first"> <CheckBox/> <p>300мл</p></div>
         </div>
         <div className="card__buy">
           <Counter/>
           <button className="card__buy-btn">Купить</button>
         </div>
       </div>
     </div>
   </div>
  );
}

export default App;
