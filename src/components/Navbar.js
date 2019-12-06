import React,  {Component} from 'react'
import {Link} from 'react-router-dom'
import  logo from '../logo.jpg'
import styled from 'styled-components'
import {ButtonContainer} from "./button"
export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
           `    <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to ="/" className="nav-link">
                      <h4>Products</h4>
                  </Link>
                </li>
                
              </ul>
                <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <ion-icon name="cart"></ion-icon>
                    </span>
                     My Cart
                </ButtonContainer>
                 
                </Link>
                
             
            </div>
          </nav>
        )
    }
}

