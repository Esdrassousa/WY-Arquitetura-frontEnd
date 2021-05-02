import React , { Component }from 'react'

import './menu.css'

import logo from '../image/WM.png'
class menu extends Component{
    render(){

        return(
         <body className="copor"> 

        <input type="checkbox" id="bt_menu"/>
        <label for="bt_menu">&#9776;</label>
        <div className="bg"></div>
        
        <div className="menu_e_Logo">
        <img src={logo} alt ='logomarca'/>
        <nav className='menu'>
        
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Pojetos</a></li>
            <li><a href="">Quem Somos</a></li>
            <li><a href="">Entre em Contato</a></li>
        </ul>
        
        
        </nav>
        </div>
        </body>  
        )
    }
}

export default menu