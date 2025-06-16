import React, { useContext } from "react";
import { Products } from "../../products";
import { ShopContext } from "../../context/shopcontext";
import { CartItem } from "./cart-item";
import './cart.css';
import { useNavigate } from "react-router-dom";
export const Cart = () =>{
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount(); 
    const navigate = useNavigate();
    return <div className="cart">
        <div><h1>Cart Items</h1></div>
        <div className="cart-items">
            {Products.map((product) => {
                if(cartItems[product.id]!== 0){
                    return (<CartItem data={product}/>
                    )
                }
                return null;

            })}
            <div className="checkout">
                <p> Subtotal :${totalAmount}</p>
                <button  onClick={() => navigate('/')}>Continue Shopping</button>
                <button onClick={() => alert("Checkout is not implemented yet.")}>Checout</button>

            </div>
        </div>
    </div>
}