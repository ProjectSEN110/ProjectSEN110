import React,{useContext} from "react";
import { ShopContext } from "../../context/shopcontext";
export const CartItem = ( props) =>{
    const {id, productName, price, prodectImage} = props.data
    const {cartItems , addToCart, removeFromCart} = useContext(ShopContext)
    return <div className="cartItem"> 
        <img src={prodectImage} />
        <div className="description" alt="Product">
            <p>{productName}</p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]}  />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>

    </div>
}