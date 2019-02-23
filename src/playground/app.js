

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);

    this.state = {
      options: []
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json)
  
      if (options) {
        this.setState( () => ({options: options}) )
      }  
    } catch (error) {
      //Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handleDeleteOptions(){
    this.setState(() => ({options:[]}))
  }

  handleDeleteOptionSingular(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option) 
    }))
  }

  handlePick(){
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const pick= this.state.options[randomNumber];
    alert(pick)
  }

  handleAddOption(option){
    if (!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option])})
    )
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOptionSingular={this.handleDeleteOptionSingular}  
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}


const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
      disabled={!props.hasOptions}
      >
      What should I do?
      </button>
    </div>
  )
}


const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option, index) => (
          <Option 
            key={index} 
            optionText={option}
            handleDeleteOptionSingular={props.handleDeleteOptionSingular}  
          />
        ))
      }

    </div>
  )
}

const Option = (props) => {

  return(
    <div>
      Option: {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOptionSingular(props.optionText)
        }}
      > 
      Remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOptionSubmit = this.addOptionSubmit.bind(this);

    this.state = {
      error: undefined
    }
  }
  
  addOptionSubmit(e) {
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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOptionSubmit}>
          <input type='text' name='optionAdded'></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

// const User  = () => {
//   return (
//     <div>
//       <p>Name: </p>
//       <p>Age: </p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))