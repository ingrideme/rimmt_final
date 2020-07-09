import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cadastro from './pages/Usuario/Cadastro';
import Login from './pages/Usuario/Login';
import Home from './components/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Toolbar from './components/Toolbar/Toolbar';


function Routes(){

return(
        <BrowserRouter>
        <Toolbar />
        <Switch>
'           <Route path exact="/" component={Home}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/login" component={Login}/>
            <Route path="/produtos" component={Home}/>
            <Route path="/carrinho" component={Carrinho}/>
'        </Switch>
    </BrowserRouter>
)
};

export default Routes;