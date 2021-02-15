import React from 'react'
import './Totalsum.css'
import {useStateValue} from './StateProvider'
import CurrencyFormat from 'react-currency-format'
import {totalAmount} from './reducer'
function Totalsum() {
    const[{ basket },dispatch] = useStateValue();

    return (
        <div className="Totalsum">
               <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="Totalsum__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalAmount(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
                <button className="Totalsum__btn"> Proceed to Checkout</button>
        </div>
    )
}

export default Totalsum
