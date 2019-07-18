import React from 'react'
import profilePic from '../images/Profile_Pic.jpg'
import aboutData from '../data/AboutData.js'


class About extends React.Component{
    constructor(){
        super()
        this.state = {
            desc : "",
            bio : "",
            pastExp : ""
            
        }
      
    }
    
    
   
    
    componentDidMount(){
        aboutData.map(item => {
            this.setState({desc : item.desc,bio : item.bio,pastExp:item.pastExp})
        })
        
    }
    
    render(){
        return(
            <div className = "container-fluid padding p-3" style = {{marginTop:"90px",backgroundColor:"white"}} >
                <div className = "row padding pt-4">
                    <div className = "col-4" >
                        <img className = "img-fluid img-thumbnail" src= {profilePic} alt="Dr Shivdev M" />
                        <div className= "col pt-4">
                          <h4> DR. SHIVADEV M </h4>
                    
                          <p><h6>  MBBS, MD, Fellow of the European Committe of Sexual Medicine (FECSM).</h6></p>

                          <p><h6>  Passionate, Ethical, Empathetic, Performance driven, Trust-worthy.</h6> </p>
                        </div>
                    </div>
                    <div className = "col">
                        <p className = "font-weight-normal">
                          {this.state.desc.split('<br/>').map(s => <React.Fragment>{s}<br/><br/></React.Fragment>) }
                        </p>
                        <h5> Bio: </h5>
                        <p className = "font-weight-normal">
                            {this.state.bio.split('<br/>').map(bio => <React.Fragment>{bio}<br/></React.Fragment>) }
                        </p>
                         <h5> Past Experience: </h5>
                        <p className = "font-weight-normal">
                            {this.state.pastExp.split('<br/>').map(e => <React.Fragment>{e}<br/></React.Fragment>) }
                        </p>
                    </div>
        
        
        
                </div>
            </div>
        
        )
    }
}





export default About