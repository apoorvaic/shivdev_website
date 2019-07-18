import React from 'react';


function Card(props){
    return(
             <div className = "col">
                <div className = "card" >
                    <img className = "card-img-top" src = {props.image} alt = "" />
                        <div className = "card body">
                            <h6> {props.title} </h6>
                            <p className = "card-text" style = {{textColor:"red"}}> {props.desc} </p>
                        </div>
                </div>
            </div>
    )}

export default Card

