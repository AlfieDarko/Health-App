import React, { Component } from 'react';
import Workout from './Workout';
import style from './style';

class WorkoutList extends Component {
  render(){
    let workoutNodes = this.props.data.map(workout => {
      return (
        <Workout author={workout.author} key={workout.id}>
          {workout.text}
        </Workout>
      )
    })

    return(
      <div style={ style.workoutList}>
        {workoutNodes}
      </div>
    )
  }
}

export default WorkoutList;
