import React from 'react';

class CampoInput  extends React.Component {
    render() {
    return(
        <div className="campoInput">
            <input 
            className="input" 
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}/>


        </div>
    );
}
}  

export default CampoInput;