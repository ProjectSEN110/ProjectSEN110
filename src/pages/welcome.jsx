import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/App.css';


function Welcome (){
    const navigate = useNavigate();

    const nextpage = () => {
        navigate ('/home')
    }
    return(
        <div className="welcome">
            <h2>Welcome to Tsakus stores</h2>
            <section>
            <p>"Hey! We're thrilled to have you at Tsakus store. Take a look around, and let us help you find exactly what you're looking for."
                want the latest trends? get to shop, or get quick deliveries? we gatch you click the link below the page to get Started .
            </p>
            </section>
            
            <img  src="/Ecommerce-Website-Development.png" alt="welcome-photo" />
            <button  className='welcome-btn' onClick={nextpage}>Get Started</button>
        </div>
    )
}
export default Welcome;