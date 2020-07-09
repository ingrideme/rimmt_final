import React from 'react';
import CampoInput from '../CampoInput';
import BotaoEnviar from '../BotaoEnviar';
import '../index.css';
import ValidatedLoginForm from './ValidatedLoginForm';

class Login  extends React.Component {
      
    render() {
    return(
        <div className="container">
        <ValidatedLoginForm />
        </div>
    );
}
}  

export default Login;