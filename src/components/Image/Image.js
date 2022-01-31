
import firstImg from '../Image/img/image23.svg';
import secondImg from '../Image/img/image22.jpg';
import {useState} from 'react';

function Image() {
const [image, setImage] = useState([firstImg])

const changeImg = () => {
    setImage([]);
    setImage([secondImg]);
};

const returnImg = () => {
    setImage([]);
    setImage([firstImg]);

}




  return (
 
         <div className="card__img">
           <img src={image}
                onMouseOver={changeImg}
                onMouseOut={returnImg} 

                alt="" />
         </div>
         
  );
}

export default Image;
