import React from "react";
import "./index.scss";

export default class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
  }
  
  handleClick = () => {
    this.setState({likes: this.state.likes +=1});
    this.props.totalFnc();
  }

  render() {
    return (
      <div className='commentContainer'>
        <div className='userName'>{this.props.user}</div>
        <div className='reply'>{this.props.text}</div>
        <button onClick={this.handleClick}>LIKE!</button><span>     Likes:  {this.state.likes}</span>
      </div>
    );
  }
}
