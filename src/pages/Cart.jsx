import { useState } from "react"
import CartBuy from "../components/CartBuy"
import Sucess from "../components/Sucess"
import TotalBuy from "../components/TotalBuy"

function Cart (){
    const [message, setMessage] = useState(false)

    return (
        <div>
            <CartBuy/>
            <TotalBuy setMessage={setMessage}/>
            {message ? <Sucess/> : null}
           
        </div>
    )
}

export default Cart