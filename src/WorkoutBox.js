import React, { Component } from 'react';
import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';
import DATA from '../data';
import style from './style';

class WorkoutBox extends Component {
  constructor(props){
    super(props);
    this.state = { data: [] };
  }
  render() {
    return(
      <div style={ style.workoutBox}>
        <h2>Comments: </h2>
        <WorkoutList data={ DATA }/>
        <WorkoutForm />
      </div>
    )
  }
}

export default WorkoutBox;
