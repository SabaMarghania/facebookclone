import React from 'react'
import {
    Link
  } from "react-router-dom";
import './Header.css'
import amazon from '../images/amazonlogo.png'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from '../StateProvider';

export default function Header() {

    const[{ basket },dispatch] = useStateValue();


    return (
        <div className="header"> 
            <Link to='/'>
                <img className='header__logo' src={amazon}/>
            </Link>
               
            <div className="header__search">
                <input type='text' />
                <SearchIcon className='icon'/>
            </div>
            <Link className="header__link" to="/login">
            <div className="header__info">
                <p>Hello, Sign In</p>
                <span>Account & Lists</span>
            </div>
            </Link>
            <Link className="header__link" to="/login">
            <div className="header__info">
                <p>Returns</p>
                <span>& orders</span>
            </div>
            </Link>

            <Link className="header__info" to="/cart">
            <div className="header__info">
                <p><ShoppingCartIcon/> Cart <span>{basket?.length}</span></p>
            </div>
            </Link>
            

        </div>
    )
}

