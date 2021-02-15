import React from 'react'
import Product from './Product';
import './ProductsCont.css'
import Rating from '@material-ui/lab/Rating';
function Products() {
    return (
        <div className='products'>
          <Product
             id='8' 
            title='HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and...'
            price={164}
            image='https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg'
            available="Currently available."
            brand="By HP"
            rating={<Rating className="rating" name="half-rating8" defaultValue={2.5} precision={0.5}/> }
            />
              <Product
             id='7' 
             title='
            DualSense Wireless Controller'
            price={80}
            image='https://images-na.ssl-images-amazon.com/images/I/41McnBJl0FL.jpg'
            available="Currently available."
            rating={<Rating className="rating" name="half-rating7" defaultValue={1.5} precision={0.5}/> }
            brand="By PlayStation"
            />
            <Product
             id='6' 
             title='
            Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls'
            price={84}
            image='https://images-na.ssl-images-amazon.com/images/I/41C4EsdONdL.jpg'
            available="Currently available."
            brand="By Roku"
            rating={<Rating className="rating" name="half-rating6" defaultValue={2.5} precision={0.5}/> }
            />
              <Product
            id='5' 
            title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD...'
            price={2580}
            image='https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg'
            available="Currently available."
            rating={<Rating className="rating" name="half-rating5" defaultValue={1.5} precision={0.5}/> }
            brand="By PlayStation"
            />
              <Product
            id='4'
            title='DualShock 4 Wireless Controller for PlayStation 4 - Magma Red'
            price={120}
            image='https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL.jpg'
            available="Currently available."
            rating={<Rating className="rating" name="half-rating4" defaultValue={1.5} precision={0.5}/> }
            brand="By PlayStation"
            />
              <Product
            id='3'
            title='Super Mario 3D All-Stars - Nintendo Switch'
            price={50}
            image='https://images-na.ssl-images-amazon.com/images/I/51B4vYND8nL.jpg'
            available="Currently available."
            rating={<Rating className="rating" name="half-rating3" defaultValue={1.5} precision={0.5}/> }
            brand="By Nintendo"
            />
             <Product
            id='2'
            title='
            Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB'
            price={542}
            image='https://images-na.ssl-images-amazon.com/images/I/31MPSDnQmUL.jpg'
            available="Currently available."
            rating={<Rating className="rating" name="half-rating2" defaultValue={3} precision={0.5} />}
            brand="By Oculus"
            />
             <Product
            id='1'
            title='    Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)'
            price={364}
            image='https://images-na.ssl-images-amazon.com/images/I/41C4JkSnyzL.jpg'
            available="Currently available."
            rating={<Rating className="rating" name="half-rating1" defaultValue={1} precision={0.5} />}
            brand="By Nintendo"
            />
        </div>
        
    )
}

export default Products
