import React from 'react';
import CampoInput from '../CampoInput';
import BotaoEnviar from '../BotaoEnviar';
import '../index.css';
import ValidatedCadastroForm from './ValidatedCadastroForm';
class Cadastro  extends React.Component {
      
    render() {
    return(
        <div className="container">
            <ValidatedCadastroForm />
        </div>
    );
}
}  

export default Cadastro;