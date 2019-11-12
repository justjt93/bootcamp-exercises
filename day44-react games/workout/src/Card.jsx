import React from 'react';



export default class Card extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            show:false
        };
      }

    toggle = () => {
        this.setState({ show: this.state.show ? false : true });
      };

  render() {
        
    return (

        <div className="card" key={this.props.card.id} onClick={this.toggle}>
            <div style={{display: this.state.show ? 'block' : 'none' }} className="textbox">{this.props.card.content}</div>
        </div>
    );
  }
}