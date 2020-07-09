import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Produto from "./index";

 const produtosLoja = [
    {
            id: 1,
            title: "Xioami Note 8", 
            img: "../img/xioamiNote8.jpg",
            preco: "1000",
            marca: "Xioami",
            info: "blablabla", 
     
        }, 
        {
            id: 2,
            title: "Xioami Note 9", 
            img: "../img/xioamiNote0.jpg",
            preco: "1000",
            marca: "Xioami",
            info: "2blablabla", 
    
        },
        {
            id: 3,
            title: "Xioami Note 8 S", 
            img: "../img/xioamiNote8.jpg",
            preco: "1000",
            marca: "Xioami",
            info: "bla bla bla", 
        }
    ]
    



class Data extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        {
          produtosLoja.map(p => <Produto key={p.id} {...p} />)
        }
      </main>
    );
  }
}

    

