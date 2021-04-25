import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import {Link, useHistory} from 'react-router-dom'
import Nav from './nav'
import './styles.css'


import project1 from '../../image/olho.jpg';
import project2 from '../../image/piramide.jpg';
import project3 from '../../image/predio.jpg';
import project4 from '../../image/hotel.jpg';

import atendente from '../../image/operador-de-telemarketing.png';
import email from '../../image/email.png';
import whats from '../../image/whats.png';


export default function Logon(){




  
  
  
      return(

        <div className='inicio'>
          
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"></link>
          
          <Nav></Nav>

          <div className="contact">

              <div className="Entre_em_contato">
                <div className="vertical">
                  <img src={atendente} alt ='comercial'/>
                  <a>ENTRE EM CONTATO</a>
                  <a>(44)99977-6693</a>
                </div>
              </div>


              <div className="email">
                <div className="vertical">
                  <img src={email} alt ='comercial'/>
                  <a>SOLICITE SEU ORÇAMENTO</a>
                  <a href="malito:arq.wesleymartins@hotmail.com?subject=Questions">arq.wesleymartins@hotmail.com</a> 
                </div>

              </div>

              <div className="whatsapp">
               
                <div className="vertical">
                  <a href="https://web.whatsapp.com/send?phone=5544999776693">
                  <img src={whats} alt ='comercial'/>
                  </a>
                  <a href="https://web.whatsapp.com/send?phone=5544999776693" target="_blank">WHATSAPP</a>
                  <a class="whatsapp-link" href="https://web.whatsapp.com/send?phone=5544999776693" target="_blank">
		                <i class="fa fa-whatsapp"></i>
	                </a>
                </div>

              </div>
          </div>



          <section className="projetos_all">
          <Link to = "/projetos/olho"><img src={project1} alt ='olho'/></Link>
            <img src={project2} alt ='hotel'/>
            <img src={project3} alt ='piramide'/>
            <img src={project4} alt ='predio'/>
       
          </section>
          
          
        </div>
       
          
      )
  }