import React from 'react';
import CampoInput from './CampoInput';
import BotaoEnviar from './BotaoEnviar';
import './index.css';

class Login  extends React.Component {
      
    render() {
    return(
        <div className="container">
        <div className="loginForm">
           
            <p>Já sou cliente RIMMT </p>
        <CampoInput type='text' placeholder="Digite seu e-mail"/>
        <CampoInput type='text' placeholder="Digite sua senha"/>
        <BotaoEnviar
            text='Login'    
        />   
         <BotaoEnviar
            text='Criar conta'/>   
        </div>
        </div>
    );
}
}  

export default Login;