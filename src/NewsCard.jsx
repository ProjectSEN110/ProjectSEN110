import React from 'react';
import PropTypes from 'prop-types'


function NewsCard(props){
   

    return (
        <div className="card">
            <img src={props.image} className="card-img"></img>
            <h1 className="card-title">{props.title}</h1>

            <p className="card-description">{props.description}</p>
        </div>
    )
}

NewsCard.defaultProps = {
    title:"Dedicated cricket field in Port Edward could benefit Northwest athletes",
    description:"It could also boost sports tourism in Port Ed., says Northwest BC Cricket Association's president",
    image:"/src/assets/Bag.png"
}

export default NewsCard;