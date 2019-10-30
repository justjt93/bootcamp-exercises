import React from 'react';
import ReactDOM from 'react-dom';
import SimpleMap from './SimpleMap.jsx';


import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
        <SimpleMap/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));




