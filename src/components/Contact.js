import React from 'react'


function Contact(){
    return(
    <div className = "container-fluid p-3" style = {{marginTop:"90px",backgroundColor:"white"}} >
        <div className = "row padding pt-4">
            <div className = "col pl-4">
                <h3> CONTACT </h3>  
                <br/>   
               <h5> Passion Fruit Clinic hours  </h5>
                <p>
                    <span>
                        Tuesday to Friday: 12 Noon to 9 PM.<br/>

                        Saturday:  10 AM to 9 PM.<br/>

                        Sunday: 10 AM to 2 PM.
                    </span>
                <br/><br/>
                <span>  <h6 className = "font-weight-bold"> Address: </h6> 
                    6, 3rd Floor, 60 Feet Road, 6th Block, Koramangala, <br/>
                    Bengaluru, Karnataka 560047
                </span>
        
                <br/><br/>
                <span> 
                    <span className = "font-weight-bold"> Phone:</span>  +91-99723 73736 
                    <br/> 
                    <span className = "font-weight-bold"> Email: </span> info@passionfruit.com
                    <br/>
                    <span className = "font-weight-bold"> Web : </span> http://www.passionfruitclinic.com/
                </span>
                </p>    
            </div> 
        </div>
    </div>
    
    )
}

export default Contact