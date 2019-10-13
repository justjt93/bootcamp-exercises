import React from "react";
import ReactDOM from "react-dom";
import Seat from "./Seat/Seat.jsx";

import "./index.scss";
import "./index.html";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSeat: null,
      bus: [
        {
          seatNumber: 1,
          status: "occupied"
        },
        {
          seatNumber: 2,
          status: "occupied"
        },
        {
          seatNumber: 3,
          status: "free"
        },
        {
          seatNumber: 4,
          status: "occupied"
        },
        {
          seatNumber: 5,
          status: "free"
        },
        {
          seatNumber: 6,
          status: "free"
        },
        {
          seatNumber: 7,
          status: "free"
        },
        {
          seatNumber: 8,
          status: "free"
        }
      ]
    };
  }

  // handleSelect = selectedSeat => {
  //   this.setState({ bus[1]: "free" });
  //   console.log(this.state);
  // };

  handleSelect = selectedSeat => {
    this.setState({ selectedSeat: selectedSeat });
  };

  render() {
    return this.state.bus.map(seat => (
      <Seat
        seatNumber={seat.seatNumber}
        status={seat.status}
        onSelect={this.handleSelect}
        selected={seat.seatNumber === this.state.selectedSeat}
      />
    ));
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
