import React, { Component } from 'react';
import axios from 'axios';
import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';
import style from './style';

class WorkoutBox extends Component {
  constructor(props){
    super(props);
    this.state = { data: [] };
    this.loadWorkoutsFromServer = this.loadWorkoutsFromServer.bind(this);
    this.handleWorkoutSubmit = this.handleWorkoutSubmit.bind(this);
    this.handleWorkoutDelete = this.handleWorkoutDelete.bind(this);
    this.handleWorkoutUpdate = this.handleWorkoutUpdate.bind(this);
    this.handleWorkoutIMG = this.handleWorkoutIMG.bind(this);
  }

  loadWorkoutsFromServer(){
    axios.get(this.props.url)
      .then(res => {
        this.setState({data: res.data})
      })
  }

  handleWorkoutIMG(workout){
    return <img src={`${workout.imageURL}`} alt=""/>
  }

  handleWorkoutSubmit(workout) {
    let workouts = this.state.data;
    workout.id  = Date.now();
    let newWorkouts = workouts.concat([workout]);
    this.setState({ data: newWorkouts });
    axios.post(this.props.url, workout)
      .catch(err => {
        console.error(err)
        this.setState({ data: workout})
      });
  }

  handleWorkoutDelete(id){
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Workout deleted');
      })
      .catch(err => {
        console.error(err);
      })
  }

  handleWorkoutUpdate(id, workout){
    axios.put(`${this.props.url}/${id}`, workout)
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount(){
    this.loadWorkoutsFromServer();
    setInterval(this.loadWorkoutsFromServer, this.props.pollInterval)
  }

  render() {
    return(
      <div style={ style.workoutBox}>
        <h2 style={style.title }>Workouts: </h2>

        <WorkoutList
          onWorkoutDelete={ this.handleWorkoutDelete }
          onWorkoutUpdate={ this.handleWorkoutUpdate }
          data={ this.state.data }
        />
        <WorkoutForm onWorkoutSubmit={this.handleWorkoutSubmit}/>

      </div>
    )
  }
}

export default WorkoutBox;
