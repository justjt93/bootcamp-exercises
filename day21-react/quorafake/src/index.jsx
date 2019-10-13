import React from 'react';
import ReactDOM from 'react-dom';

import Term from './term/term.jsx';
import './index.scss';
import './index.html';


class App extends React.Component {
  render() {
    return (
        <Term />

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
