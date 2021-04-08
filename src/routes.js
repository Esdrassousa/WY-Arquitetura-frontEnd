import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Projeto_olho from './pages/Projetos/Projeto_olho'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path='/projetos/olho' exact component={Projeto_olho}></Route>
             
            </Switch>
        </BrowserRouter>
    )
}