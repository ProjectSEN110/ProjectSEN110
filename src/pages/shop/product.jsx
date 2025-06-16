import React, { useContext } from "react";
import {ShopContext} from '../../context/shopcontext';
export const Product = (props) =>{
   const {id, productName, price, prodectImage} = props.data;
   const {addToCart , cartItems} = useContext(ShopContext)
   const cartItemAmount = cartItems[id]
    return (
        <div className="product">
        <img src={prodectImage} alt="Product "/>
        <div className="description">
            <p>{productName}</p>
            <p>${price}</p>
        </div>
        <button className="addToCartBtn" onClick={() => addToCart(id)}> 
            Add to cart{cartItemAmount>0 &&<>({cartItemAmount})</>}
            </button>

    </div>
    );
};