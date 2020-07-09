import React from 'react';
import '../../components/Home.css';
import xioamiNote10 from '../../img/xiaomiNote10.jpg';
import { addBasket } from '../../actions/addAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css'



const Produto3 = (props) => {

  return (
    
    <div>
              <div className="titulo">
            
       <h2>Xiaomi Mi Note 10</h2>
      <h4>R$ 3.679,00 </h4>

        </div>
        <div className="containerinterno">
        <div className="imagem">
            <img src={xioamiNote10} alt="Xioami Note 10"/>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <a onClick={() =>props.addBasket('xiaomiNote8')} className="addCarrinho produto1" href="#">Adicionar ao Carrinho</a>
        </div>

        <div className="conteudo">

      
      <Link to="/"><button className="botaoProduto"> Voltar </button> </Link>
      <Link to="/carrinho"> <button className="botaoProduto"> Carrinho </button> </Link>
      <br/>
      <Link  to="/carrinho"> <button  onClick={() =>props.addBasket('xiaomiNote8denovo')} className="addCarrinho cart1" className="botaoComprar"> Comprar </button> </Link>

      <div className="tabelinha">

<table>
  <tbody>
  <tr>
  <td>Sistema Operacional&nbsp;</td>
  <td>Android 10.0</td>
  </tr>
  <tr>
  <td>RAM</td>
  <td>6GB</td>
  </tr>
  <tr>
  <td>Capacidade de armazenamento
       de memoria</td>
  <td>128GB</td>
  </tr>
  <tr>
  <td>Tamanho da tela</td>
  <td>6.47 Polegadas</td>
  </tr>
  <tr>
  <td>Resolu&ccedil;&atilde;o</td>
  <td>2040x1080 Pixels</td>
  </tr>
  <tr>
  <td>Marca</td>
  <td>Xiaomi</td>
  </tr>
  <tr>
  <td>Cor</td>
  <td>Preto</td>
  </tr>
  </tbody>
  </table>
</div>

      </div>
    </div>
    </div>
  )
}

export default connect(null, { addBasket } )(Produto3);

