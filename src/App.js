import React, { Component } from 'react';
import Routes from './Routes';
import Toolbar from './components/Toolbar/Toolbar';
import MenuLadim from './components/MenuLadim/MenuLadim';
import Backdrop from './components/Backdrop/Backdrop';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cadastro from './pages/Usuario/Cadastro';
import Login from './pages/Usuario/Login';
import Home from './components/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Produto from './pages/Produto/index';
import Produto2 from './pages/Produto/index2';
import Produto3 from './pages/Produto/index3';



class App extends Component {
    state = {
      menuLadimOpen: false
    };

    menuLadimClickHandler = () => {
      this.setState((prevState) => {
        return {menuLadimOpen: !prevState.menuLadimOpen};
      });
    };

backdropClickHandler = () => {
    this.setState({menuLadimOpen: false});

}

  render() {
    let backdrop; 

    if (this.state.menuLadimOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
   
    
  return (


    <BrowserRouter>
    <Provider store={store}>


  
      <div style={{height: '100%'}}>
          <Toolbar menuClickHandler={this.menuLadimClickHandler}/>
          <MenuLadim show={this.state.menuLadimOpen} />
              {backdrop}
   
  
       
        <Switch>
           <Route path exact="/" component={Home}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/login" component={Login}/>
            <Route path="/carrinho" component={Carrinho}/>
            <Route path="/produto" component={Produto}/>
            <Route path="/produto2" component={Produto2}/>
            <Route path="/produto3" component={Produto3}/>
        </Switch>
    </div>
    </Provider>
    </BrowserRouter>

);
}

}
export default App;