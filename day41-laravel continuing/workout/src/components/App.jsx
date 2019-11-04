import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Search from "./Search.jsx";
import Productlist from "./Productlist.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  handleSearch = $searchValue => {
    this.setState({ search: $searchValue });
  };

  render() {
    return (
      <div id='page'>
        <Header />

        <div id='main'>
          <Search handleSearch={this.handleSearch} />
          <div className='content'>
            <h1>Products</h1>
            <Productlist searchInput={this.state.search} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
