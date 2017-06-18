import React, { Component } from 'react';
import style from './style';

class WorkoutForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      bodypart: "",
      imageURL: ""
      };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleBodypartChange = this.handleBodypartChange.bind(this);
    this.handleImageURLChange = this.handleImageURLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleNameChange(e){
  this.setState({name: e.target.value});
}
handleDescriptionChange(e){
  this.setState({ description: e.target.value});
}
handleBodypartChange(e){
  this.setState({bodypart: e.target.value});
}
handleImageURLChange(e){
  this.setState({imageURL: e.target.value});
}
handleSubmit(e){
  e.preventDefault();
  console.log(`${this.state.name} is "${this.state.description}"`)
}
  render(){
    return(
      <form style={ style.workoutForm }
        onSubmit={ this.handleSubmit }>
        <input
          type="text"
          placeholder="Name of Workout..."
          style={style.workoutFormName}
          value={this.state.name}
          onChange={this.handleNameChange}/>
      </form>
    )
  }
}
