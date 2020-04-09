import React from'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from'./pages/Home';
import Sobre from'./pages/Skills';
import Contato from './pages/Contato';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/> 
                <Route path="/sobre" component={Sobre}/>
                <Route path="/contato" component={Contato}/>
            </Switch>
        </BrowserRouter>
    );
}