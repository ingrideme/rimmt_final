import React from 'react';

class BotaoEnviar  extends React.Component {
    render() {
    return(
        
        <div className="botaoEnviar"
        >
      
        <button className="btn">
            {this.props.text}
        </button>

        </div>
    );
}
}  

export default BotaoEnviar;