import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Workout extends Component {
  constructor(props){
    super(props)
    this.state = {
      toBeUpdated: false,
      name: '',
      description: '',
      bodypart: "",
      imageURL: ""
    }
  //binding all functions to this className
  this.deleteWorkout = this.deleteWorkout.bind(this);
  this.updateWorkout = this.updateWorkout.bind(this);
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  this.handleBodypartChange = this.handleBodypartChange.bind(this);
  this.handleWorkoutUpdate = this.handleWorkoutUpdate.bind(this);
  this.handleImageURLChange = this.handleImageURLChange.bind(this);
};
updateWorkout(e){
  e.preventDefault();
  this.setState({ toBeUpdated: !this.state.toBeUpdated });
}

handleWorkoutUpdate(e){
  e.preventDefault()
  let id = this.props.uniqueID;
  //if name or text changed, set it. if not, leave null and our PUT
  //request will ignore it.
  let name = (this.state.name) ? this.state.name : null;
  let description = (this.state.description) ? this.state.description : null;
  let bodypart = (this.state.bodypart) ? this.state.bodypart : null;
  let imageURL = (this.state.bodypart) ? this.state.imageURL: null

  let workout = {
  name: name,
  bodypart: bodypart,
  description: description,
  imageURL: imageURL
};

  this.props.onWorkoutUpdate(id, workout);
  this.setState({
    toBeUpdated: !this.state.toBeUpdated,
    name: "",
    description: "",
    bodypart: "",
    imageURL: ""
  })
}

deleteWorkout(e){
  e.preventDefault()
  let id = this.props.uniqueID;
  this.props.onWorkoutDelete(id);
  console.log('oops deleted');
}

handleDescriptionChange(e){
  this.setState({ description: e.target.value });
}

handleNameChange(e){
  this.setState({ name: e.target.value});
}

handleBodypartChange(e){
  this.setState({ bodypart: e.target.value});
}

handleImageURLChange(e){
  this.setState({imageURL: e.target.value})
}

rawMarkup() {
  let rawMarkup = marked(this.props.children.toString());
  return { __html: rawMarkup };
}

  render(){
    return(
      <div style={style.workout }>
        <h3>{this.props.name}</h3>

<span dangerouslySetInnerHTML={this.rawMarkup()}/>
<a
  style={ style.updateLink }
  href='#'
  onClick={this.updateWorkout}> Update</a>

        <a style={ style.deleteLink } href="#" onClick={ this.deleteWorkout}> Delete </a>
        { (this.state.toBeUpdated)
        ? (<form onSubmit={ this.handleWorkoutUpdate }>
          <input
            type="text"
            placeholder='Update name...'
            style={ style.workoutFormName }
            value={ this.state.name }
            onChange={ this.handleNameChange}
          />
          <input
            type="text"
            placeholder='Update description'
            style={ style.workoutFormDescription }
            value={ this.state.description }
            onChange={ this.handleDescriptionChange }
          />
          <input
            placeholder='Update bodypart'
            style={ style.workoutFormBodypart }
            value={ this.state.bodypart }
            onChange={ this.handleBodypartChange }
            type="text"
          />
          <input
            type="text"
            placeholder='Update Image'
            style={ style.workoutFormImageURL }
            value={ this.state.imageURL }
            onChange={ this.handleImageURLChange }
            />

            <input
              type="submit"
              style={ style.workoutFormPost }
              value="Update"
            />

        </form>)
      : null }
      </div>
    )
  }
}
export default Workout;
