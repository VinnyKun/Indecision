import React from 'react';

export default class AddOption extends React.Component {
  
  state = {
    error: undefined
  }
    
  addOptionSubmit = (e) => {
    //prevent default form submission and whole page refresh
    e.preventDefault();

    //this is the option added from the input tag. trim removes preceding and space afterwards
    const option = e.target.elements.optionAdded.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({
      error: error
    }))

    if (!error) {
      e.target.elements.optionAdded.value='';
    }

  };
  
  render() {
    return(
      <div>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        <form className='add-option' onSubmit={this.addOptionSubmit}>
          <input className='add-option__input' type='text' name='optionAdded'></input>
          <button className='button'>Add Option</button>
        </form>
      </div>
    )
  }
}