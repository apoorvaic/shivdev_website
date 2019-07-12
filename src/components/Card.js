import React from 'react';


function Card(props){
    return(
             <div className = "col">
                <div className = "card" >
                    <img className = "card-img-top" src = {props.image} alt = "" />
                        <div className = "card body">
                            <h5> {props.title} </h5>
                            <p className = "card-text"> {props.desc} </p>
                        </div>
                </div>
            </div>
    )}

export default Card

