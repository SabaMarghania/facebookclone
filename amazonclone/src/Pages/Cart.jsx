import React from 'react'
import {useStateValue} from '../StateProvider';
import image from '../images/ad.jpg';
import './Cart.css'
import Rating from '@material-ui/lab/Rating';
import CartPage from '../CartPage';
import Totalsum from '../Totalsum'
function Cart() {
    const[{ basket }] = useStateValue();


    return (
        <div className="cart">
            <img src={image} alt=''/>
        {basket?.length ===0 ? (
            <div className="empty__basket">
                <h1>Your basket is empty.</h1>
                <p>You have no items in your basket. To buy one or more items, click "Add to basket" below the item.</p>
            </div>
        ):(
            <div>
                <h1>Your shopping basket</h1>
                <Totalsum/>
                {basket.map((item)=>
                    <CartPage key={item.id}
                     id={item.id}
                     image={item.image}
                     title={item.title}
                     price={item.price}
                     rating={item.rating}
                     brand={item.brand}
                     available={item.available}
                    />
                )}

            </div>
        )}
        </div>

    )
}

export default Cart
