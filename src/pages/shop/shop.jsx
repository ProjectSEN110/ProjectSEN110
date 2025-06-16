import React from "react";
import {Products} from '../../products'
import { Product } from "./product";
import "./shop.css";
export const Shop = () =>{
    return <div className="Shop">
        <div className="shoptitle"><h1>Boutique</h1></div>
        <div className="products">
            {Products.map((product)=>(
            <Product data = {product}/>
            ))}
            
        </div>
        
    </div>
}