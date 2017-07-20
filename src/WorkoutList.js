import React, { Component } from 'react';
import Workout from './Workout';
import style from './style';

class WorkoutList extends Component {
  render(){
    let workoutNodes = this.props.data.map(workout => {
      return (
        <Workout
          name={workout.name || 'unknown'}
          uniqueID={ workout['_id'] }
          onWorkoutDelete={ this.props.onWorkoutDelete}
          onWorkoutUpdate={ this.props.onWorkoutUpdate}
          key={ workout['_id'] }>
          {workout.description || 'empty!'}
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
