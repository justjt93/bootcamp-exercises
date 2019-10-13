import React from "react";
import ReactDOM from "react-dom";
import Seat from "./Seat/Seat.jsx";

import "./index.scss";
import "./index.html";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.setState(state => {
      let bus = state.bus.map((seat, index) => {
        if (index === selectedSeat && seat.status === "free") {
          return { seatNumber: seat.seatNumber, status: "selected" };
        } else if (index === selectedSeat && seat.status === "selected") {
          return { seatNumber: seat.seatNumber, status: "free" };
        } else {
          return seat;
        }
      });
      return {
        bus
      };
    });
  };

  render() {
    return this.state.bus.map((seat, index) => (
      <Seat
        seatNumber={seat.seatNumber}
        status={seat.status}
        onSelect={this.handleSelect}
        index={index}
      />
    ));
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
