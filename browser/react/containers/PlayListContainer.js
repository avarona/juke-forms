import React from 'react';
import NewPlayListForm from '../components/NewPlayListForm'


class NewPlayList extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        inputValue: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(event){
      this.setState({
        inputValue: event.target.value
      })
    }

    onFormSubmit(event){
      event.preventDefault();
      console.log(this.state);
      this.setState({
        inputValue: ''
      })
    }

    render() {
      return (
        <NewPlayListForm inputValue={this.state.inputValue} handleChange={this.handleChange} onFormSubmit={this.onFormSubmit}/>
      )
    }
}

export default NewPlayList
