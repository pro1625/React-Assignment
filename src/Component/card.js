import React from 'react';
import image1 from "./image1.jpg";
import './card.css';



export default function Card(props){

    function HandleClick(){
        return(
            alert(props.name)
        )
    }

    return(
        <div className="outer_div">
            <div className="inner_div">
                <div className="component">
                    <img className="image" src= {image1} alt="DP" />  
                    <p>{props.designation}</p>
                    <h1>{props.name}</h1> 
                    <p>{props.description}</p>
                    <button onClick={HandleClick}>See More</button>
                </div>
            </div>
        </div>
    )
}
