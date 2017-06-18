import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleComponent from './titleComponent';
import GridLayout from './gridLayout';
import {Grid, Col, Row} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <MuiThemeProvider>
            <TitleComponent />
          </MuiThemeProvider>
          </div>

          <div className="content">

          </div>


        </div>


    );
  }
}

export default App;
