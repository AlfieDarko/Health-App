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
  let name = this.state.name.trim();
  let description = this.state.description.trim();
  let bodypart = this.state.bodypart.trim();
  let imageURL = this.state.imageURL.trim();
if (!name || !description){
  return;
}
this.props.onWorkoutSubmit({
  name: name,
  description: description,
  bodypart: bodypart,
  imageURL: imageURL
});
this.setState({  name: name,
  description: description,
  bodypart: bodypart,
  imageURL: imageURL
})

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
          onChange={this.handleNameChange}
        />

        <input
          type="text"
          placeholder="Describe workout..."
          style={ style.workoutFormDescription}
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />

        <input
          type="text"
          placeholder="Name of body part"
          style={style.workoutFormBodypart}
          value={this.state.bodypart}
          onChange={this.handleBodypartChange}
        />

        <input
          type="text"
          placeholder="image URL"
          style={style.workoutFormImageURL}
          value={this.state.imageURL}
          onChange={this.handleImageURLChange}
        />

        <input
          type="submit"
          style={ style.workoutFormPost }
          value="Post"
        />


      </form>
    )
  }
}

export default WorkoutForm;
