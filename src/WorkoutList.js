import React, { Component } from 'react';
import Workout from './Workout';
import style from './style';
import none from './none.png'


class WorkoutList extends Component {
  render(){

    let workoutNodes = this.props.data.map(workout => {
      return (
      <div>
        {console.log(workout)}
        <img src={workout.imageURL ? workout.imageURL : none} style={style.workoutimage} alt=""/>

        <Workout
          name={workout.name || 'unknown'}
          uniqueID={ workout['_id'] }
          onWorkoutDelete={ this.props.onWorkoutDelete}
          onWorkoutUpdate={ this.props.onWorkoutUpdate}

          key={ workout['_id'] }>
          {workout.description || 'empty!'}
        </Workout>
      </div>

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
