import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(
      "https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/autumn-2019/2019-11-05"
    )
      .then(response => response.json())
      .then(dataResponse => this.setState({ data: dataResponse }));
  }

  render() {      
    return (
      <div className='list'>
        {this.state.data.attendance
          ? this.state.data.attendance.map(person =>
            
            <p>
                <ul>
                    <li>{person.name}</li>
                    <li>{person.id}</li>
                    <li>{person.from}</li>
                </ul>
            </p>
            )
          : "loading"}{" "}
      </div>
    );
  }
}
