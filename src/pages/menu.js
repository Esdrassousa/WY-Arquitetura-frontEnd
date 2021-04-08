import React , { Component }from 'react'

import './menu.css'
class Nav extends Component{
    render(){

        return(
         <body> 

        <input type="checkbox" id="bt_menu"/>
        <label for="bt_menu">&#9776;</label>
        
        <nav className='menu'>
            
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Pojetos</a></li>
            <li><a href="">Quem Somos</a></li>
            <li><a href="">Entre em Contato</a></li>
        </ul>
        
        
        </nav>
        </body>  
        )
    }
}

export default Nav