import React from 'react';
import fServiceData from '../data/FeaturedServicesData.js'
import Card from './Card.js'


function FeaturedServices(){
    const cardComponent = fServiceData.map(data => {
        return (
        <Card key = {data.id} title = {data.title} desc = {data.desc} image = {data.src} />
       )
    })
        
    
    return(
        <div className = "p-5">
            <div className = "conatiner-fluid padding">
                <div className = "row welcome text-center">
                    <div className="col-12 padding">
                        <h2> Featured Services</h2>
                    </div>
        
                </div>
          </div>
          <div className = "container-fluid padding">
                <div className = "row padding">
                    {cardComponent}
                   
                </div>
            </div>
        </div>
    
    )
    
    
}

export default FeaturedServices