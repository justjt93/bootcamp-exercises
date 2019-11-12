import React from "react";

export default class MyList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(
      "https://classes.codingbootcamp.cz/api/student_attendance/coding-bootcamp/autumn-2019/2871"
    )
      .then(response => response.json())
      .then(dataResponse => this.setState({ data: dataResponse }));
  }

  render() {
    if (this.state.data.attendance) {
        console.log(this.state.data.attendance[0].present[0].from);
        
      return (
        <div className='personalList'>
          <h3>
            Attendance :<br />
            {this.state.data.name}
          </h3>
          {this.state.data.attendance.map(day => (
            <tr>
              <td>{day.date}</td>
              {/* <td>{day.present[0].from}</td> */}
              <td>Present</td>
            </tr>
          ))}
        </div>
      );
    }

    return <h1>loading..</h1>;
  }
}
