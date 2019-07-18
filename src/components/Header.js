import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import { FaAlignRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            isOpen : false
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    
    handleToggle(){
        this.setState({isOpen:!this.state.isOpen            
        })
    }
    
    render(){
       
        return(
        <nav className = "navbar navbar-expand-md sticky-top">
            <div className = "container-fluid">
                <Link className = "navbar-brand"  to ="/">Dr. Shivdev M <br/> Psychatrist</Link>
                <button className = "navbar-toggler" onClick = {this.handleToggle}>
                    <FaAlignRight className = "nav-icon" />
                </button>
                <ul className = {this.state.isOpen?"nav-links show-nav" : "nav-links"}>
                    <li className="nav-item">
                       
                    <NavLink exact to="/" activeStyle={{color: "grey"}}>
                        Home
                    </NavLink>
                    </li>
                   
                    <li className="nav-item">
                        <NavLink to ="/about/" activeStyle={{color: "grey"}}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to ="/contact" activeStyle={{color: "grey"}}>Contact</NavLink>
                    </li>
                
                </ul>
            
            </div>
            
        </nav>
        )
    }
    
}
           
export default Header