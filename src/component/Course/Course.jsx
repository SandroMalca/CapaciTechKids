import {useState} from 'react'
import style from '../course/Course.module.css'
export default function Course(props) {

    const {title,puntucion, desc, categoria,image}=props

    const [isFav, setIsFav] = useState(false);
    //const dispatch = useDispatch();
    //const myFavorites = useSelector((s) => s.myFavorites);


    function handleFavorite() {
        if (isFav) {
        setIsFav(false);
        //dispatch(deleteFavorites(ch.id));
        } else {
        setIsFav(true);
        //dispatch(addFavorites(ch));
        }
    }


  return (
    <div className={style.cont}>
        <div className={style.upbar_card}>
            {isFav ? (
                <button onClick={() => handleFavorite()}>❤️</button>
                ) : (
                <button onClick={() => handleFavorite()}>🤍</button>
            )}
           <button className={style.bttn} onClick={props.onClose}>X</button>
        </div> 
        
        <div>
                <img className={style.img} src={image} alt={image}/>
                <h2>{title}</h2>
                <h2>{categoria}</h2>
                <h2>{puntucion}</h2>
                <h2>{desc}</h2>
                
                </div>                                          
    </div>
  )
}
