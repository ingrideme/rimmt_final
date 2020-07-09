import React from 'react';
import xioamiNote8 from '../../img/xioamiNote8.jpg';
import xioamiNote9 from '../../img/xioamiNote9.jpg';

const Conteudo = () => {
    return (
        
        <div className="container">
            <div className="image">
                <img src={xioamiNote8} alt="Xioami Note 8" />
                <h3>Xioami Note 8</h3>
                <h3>Mil Real</h3>
                <a href="addCarrinho cart1">Adicionar ao carrinho</a>
            </div>

            <div className="image">
                <img src={xioamiNote9} alt="Xioami Note 9" />
                <h3>Xioami Note 9</h3>
                <h3>Mil Real</h3>
                <a href="addCarrinho cart2">Adicionar ao carrinho</a>
            </div>

        </div>
                );
}

export default Conteudo;