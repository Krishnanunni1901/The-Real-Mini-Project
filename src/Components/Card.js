import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'

function Card(props) {
    return (
        <div className={`cardStyle d-flex align-items-center ${props.colorVarient}`}>
                <div className="cardIcon d-flex align-items-center justify-content-center" >{props.icon}</div>
            <div>
                <h4>{props.ticketNo}</h4>
                <p>{props.cardType}</p>
            </div>
            
        </div>
    )
}

export default Card
