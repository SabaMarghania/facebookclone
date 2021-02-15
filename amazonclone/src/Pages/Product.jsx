import React from 'react'
import '../Pages/Product.css'
import {useStateValue} from '../StateProvider';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import ReactNotifications from 'react-notifications-component';


function Product({id,title,price,image,available,brand,rating}) {
   

    const[{ basket },dispatch] = useStateValue();
    const addToBasket = () =>{
         {
            store.addNotification({
              title: 'Purchase',
              message: 'Your Purchase Has Been Made',
              type: 'success',                        
              container: 'top-center',                
              animationIn: ["animated", "fadeIn"],     
              animationOut: ["animated", "fadeOut"], 
              width:300,  
              dismiss: {
                duration: 400
              }
            })
          }
    dispatch({
        type:"ADD_TO_BASKET",
        item: {
            id:id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            brand: brand,
            available:available,
        }
    })
    }
 
    return (
        <>
        <div className="Product"  >

            <div className="Product__image">
                <img src={image} alt=''/>
            </div>
            <div className='Product__title'>
                <h3>{title}</h3>
                <p>{brand}</p>
            </div>
            <div className='rating'>
                <p>{rating}</p>
            </div>
            <div className="Product__price">
                <p>${price}</p>
                <span>{available}</span>
            </div>
            <ReactNotifications />

            <button className='btn' onClick={addToBasket}>Add to basket</button>
        </div>
            <ReactNotifications />
        </>
    )
}

export default Product;
