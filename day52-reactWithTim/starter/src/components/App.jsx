import React, { Component } from "react";
import UserPanel from "./User-Panel.jsx";
import UserList from "./User-List.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: false,
      selectedUserIndex: null,
      data: []
    };
  }

  componentDidMount() {
    fetch("https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/")
      .then(response => response.json())
      .then(dataResponse => this.setState({ data: dataResponse }));
  }

  setSelectedUser = selectedUserIndex => {
    console.log(this.state.data[selectedUserIndex]);
    this.setState({ 
      selectedUser: this.state.data[selectedUserIndex],
      selectedUserIndex: selectedUserIndex
     });
  };

  render() {
    if (!this.state.data) {
      return <div style={{ fontSize: "6rem" }}>Loading...</div>;
    } else {
      return (
        <>
          <UserList
            users={this.state.data}
            setSelectedUser={this.setSelectedUser}
            selectedUserIndex={this.state.selectedUserIndex}
          />
          <UserPanel user={this.state.selectedUser} />
        </>
      );
    }
  }
}

export default App;
