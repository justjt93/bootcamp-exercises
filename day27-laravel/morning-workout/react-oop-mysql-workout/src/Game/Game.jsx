import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">
<ul>
                    
                        <h3>{this.props.name}</h3>
                        <p>Rating: {this.props.rating}</p>
                        <img src={this.props.image_url} alt=""/>
                        <p>{this.props.description}</p>
                        <p>Released: {this.props.released_at} </p>
                    
</ul>
            </div>
        );
    }
}