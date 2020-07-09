import React from 'react';
import '../../components/Home.css';
import xioamiNote8 from '../../img/xioamiNote8.jpg';
import { addBasket } from '../../actions/addAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css'



const Produto = (props) => {

  return (
    
    <div>
        <div className="titulo">
            
            <h2>Xiaomi Note 8</h2>
            <h4>R$ 1.498,00 </h4>

        </div>
        <div className="containerinterno">
        <div className="imagem">
            <img src={xioamiNote8} alt="Xioami Note 8"/>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <a onClick={() =>props.addBasket('xiaomiNote8')} className="addCarrinho produto1" href="#">Adicionar ao Carrinho</a>
        </div>

  
      <div className="conteudo">
  
       
      <Link to="/"><button className="botaoProduto"> Voltar </button> </Link>
      <Link to="/carrinho"> <button className="botaoProduto"> Carrinho </button> </Link>
      <br/>
      <Link  to="/carrinho"> <button  onClick={() =>props.addBasket('xiaomiNote8')} className="addCarrinho cart1" className="botaoComprar"> Comprar </button> </Link>

      <div className="tabelinha">
              <table>
        <tbody>
        <tr>
        <td>Sistema Operacional&nbsp;</td>
        <td>Android 9.0</td>
        </tr>
        <tr>
        <td>RAM</td>
        <td>4GB</td>
        </tr>
        <tr>
        <td>Capacidade de armazenamento
             de memoria</td>
        <td>64GB</td>
        </tr>
        <tr>
        <td>Tamanho da tela</td>
        <td>6.3 Polegadas</td>
        </tr>
        <tr>
        <td>Resolu&ccedil;&atilde;o</td>
        <td>2040x1080 Pixels</td>
        </tr>
        <tr>
        <td>Marca</td>
        <td>MI</td>
        </tr>
        <tr>
        <td>Cor</td>
        <td>Azul</td>
        </tr>
        </tbody>
        </table>
      </div>

      </div>
    </div>
    </div>
  )
}

export default connect(null, { addBasket } )(Produto);

