import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleComponent from './titleComponent';
import WorkoutBox from './WorkoutBox';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <MuiThemeProvider >
            <TitleComponent />
          </MuiThemeProvider>
          </div>

          <div className="content">
      <WorkoutBox
        url='http://localhost:3001/api/workouts'
        pollInterval={2000}
      />

          </div>


        </div>


    );
  }
}

export default App;
