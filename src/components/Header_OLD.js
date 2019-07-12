import React from 'react'
import logo from '../images/Logo.jpg'
import {Link} from 'react-router-dom'
import '../App.css'
import { FaAlignRight } from "react-icons/fa";


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
        <nav className = "navbar">
            <div className = "nav-center">
                <div className = "nav-header">
            
                <div className = "site-branding-text">
                    <p className = "site-title">
                        DR. Shivdev M
                    </p>
                    <p className = "site-description">
                        PSYCHIATRIST
                    </p>
                </div>
                   
               
                <button className = "nav-btn" onClick={this.handleToggle}>
                    <FaAlignRight className = "nav-icon" />
                </button>
                </div>
                <ul className = {this.state.isOpen?"nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to ="/">Home</Link>
                        <Link to ="/about/">About</Link>
                    </li>
                </ul>
            
            </div>
        </nav>
        )
    }
    
}
           
export default Header