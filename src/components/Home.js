import React from 'react'
import profilePic from '../images/Profile_Pic.jpg'
import FeaturedServices from './FeaturedServices.js'

function Home(){
    return(
        <div style = {{marginTop:"90px",backgroundColor:"grey"}} className = "bg-light">
            <div className = "container-fluid padding">
                <div className = "row padding pt-4">
                    
                    <div className = "col-4" >
                        <img className = "img-fluid img-thumbnail" src= {profilePic} alt="Dr Shivdev M" />
                    </div>
                    <div className = "col">
                        <p className = "font-italic font-weight-normal">
                            The aim of my practice is to provide expert psychiatric care in a trusting and empathic environment.
                            <br/> <br/>
                            I encourage an assertive and collaborative treatment style to help you recover faster and develop the insight, skills, and resilience needed to better handle life challenges.
                        </p>
                    </div>
                </div>
            </div>
        
            <FeaturedServices />
        </div>
    )
}

export default Home