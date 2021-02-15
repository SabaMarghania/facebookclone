import React from 'react'
import './Body.css'
import img from '../images/body-bg.jpg'

function Body() {
    return (
        <div className="body">
            <div className="body__bg">
                <img src={img}/>
            </div>
        </div>
    )
}

export default Body
