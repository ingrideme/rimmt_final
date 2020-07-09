import React from 'react';
import './DesenhoBotaoLadim.css';

const desenhoBotaoLadim = props => (
    <button className="botao" onClick={props.click}>
        <div className="botao_linha"/>
        <div className="botao_linha"/>
        <div className="botao_linha"/>
    </button>
);

export default desenhoBotaoLadim;