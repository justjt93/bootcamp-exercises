import React from "react";
import Card from "./Card.jsx";

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    text: '',
      data: [
        {
          content: "A",
          id:1
        },
        {
          content: "C",
          id:2
        },
        {
          content: "B",
          id:3
        },
        {
          content: "A",
          id:4
        },
        {
          content: "B",
          id:5
        },
        {
          content: "C",
          id:6
        }
      ]
    };
  }


let grid =[
    [null,null],
    [null,null],
    [null,null],
    [null,null]
]  
const letters = ['A','B','C','D'];
let counts = {'A':0,'B':0,'C':0,'D':0};

for (let i=0;i<4;i++){
    (let i=0;i<2;i++){
    }
}

  render() {


      
    return (
      <div className='board'>
        {this.state.data.map(card => {
          return <Card card={card} />;
        })}
      </div>
    );
  }
}
