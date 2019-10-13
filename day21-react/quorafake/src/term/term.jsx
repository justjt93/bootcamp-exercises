import React from "react";
import Answer from "../answer/Answer.jsx";
import "./index.scss";

export default class Term extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalLikes: 0,
      randomNumber:10,
      termArray: [
        {
          term: "Paralysis by analysis",
          termDef:
            "the state of over-analyzing (or over-thinking) a situation so that a decision or action is never taken, in effect paralyzing the outcome.",
          answers: [
            { user: "baked_turtle", text: "Your definition is stupid." },
            { user: "naked_eye", text: "Chill out, man!" },
            { user: "faked_icecream", text: "Holy Moly!" }
            ]

        },
        {
          term: "Loquacious",
          termDef:
            "A loquacious person talks a lot, often about stuff that only they think is interesting. You can also call them chatty or gabby, but either way, they are loquacious.",
        
          answers: [
            { user: "crayyyzy_HELL", text: "This is so meee lololol." },
            { user: "broPerson", text: "Whhaat?" },
            { user: "EchoMan", text: "Thanks for this definition man!" }
            ]
        },
        {
          term: "Motorboating",
          termDef:
            "The act of placing one's head between a woman's breasts and making the sound of a motorboat with one's lips whilst moving the head from side to side.",
          
          answers: [
            { user: "likeee_Jane", text: "WOW! So sexist!" },
            { user: "conorMcGregor", text: "I motorboat all the time!" },
            { user: "TrumpiePOTUS", text: "Gotta love a good motorboating!" }
            ]
        }
      ],

    };
  }
  totalFnc = () => {
    this.setState({likes: this.state.totalLikes +=1});
    
  }
  render() {
    return (
      <>
        {this.state.termArray.map(termInArray => (
          <div className='termContainer'>
            <p>{this.state.totalLikes}</p>
            <h3 className='term'>{termInArray.term}</h3>
            <p>{this.state.randomNumber}</p>
            <p className='termDef'>{termInArray.termDef}</p>
            {termInArray.answers.map(answerInArray => (
            <Answer
            user={answerInArray.user} 
            text={answerInArray.text} 
            totalFnc ={this.totalFnc}
            />
            ))}
          </div>
        ))}
      </>
    );
  }
}
