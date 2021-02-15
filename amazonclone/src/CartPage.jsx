import Rating from '@material-ui/lab/Rating';
import React from 'react'
import './CartPage.css'
import {useStateValue} from './StateProvider'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import ReactNotifications from 'react-notifications-component';
import Totalsum from './Totalsum'
function CartPage({id,image,title,price,available,brand}) {
    const[{ basket },dispatch] = useStateValue();

    const removeFromBasket =() =>{
        {
            store.addNotification({
              title: 'Item',
              message: 'Your item has been removed',
              type: 'warning',                        
              container: 'top-center',                
              animationIn: ["animated", "fadeIn"],     
              animationOut: ["animated", "fadeOut"], 
              dismiss: {
                duration: 400
              }
            })
          }
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    return (
        <>
        <ReactNotifications/>
        <div className="CartPage">
            <img src={image} alt=""/>

          <div className="CartPage__info">
            <div className='CartPage__title'>
                <h2>{title}</h2>
            </div>
            <div className='CartPage__brand'>
                <p>{brand}</p>
            </div>
            <div className='rating'>
            <Rating className="rating" name="half-rating8" defaultValue={2.5} precision={0.5}/>
            </div>
            <div className="CartPage__price">
                <p>${price}</p>
            </div>
            
            <div className="CartPage__available">
                <h4>{available}</h4>
            </div>
            <button className='btn_remove' onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>

        </>

    )
}

export default CartPage
