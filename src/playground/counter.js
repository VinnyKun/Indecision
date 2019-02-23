//templateTwo area

// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }

// const setupReset = () => {
//   count = 0;
//   renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} >+1</button>
//       <button onClick={minusOne} >-1</button>
//       <button onClick={setupReset} >reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


class Counter extends React.Component {
  constructor(props){
    super(props)

    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      count: 0
    }
  }

  //fetching data
  componentDidMount() {
    try {
      const json = localStorage.getItem('count')
      const countString = JSON.parse(json)
      const count = parseInt(json, 10)

      if (!isNaN(count)) {
        this.setState( () => ({count: count})  )
      }
      
    } catch (error) {
      //Do nothing at all
    }
    
  }

  //saving data
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count)
      localStorage.setItem('count', json)
    }

  }
  
  addOne(){
    this.setState((prevState) => {
      return{
        count: prevState.count + 1
      }
    })
  }

  minusOne(){
    this.setState((prevState)=>{
      return {
        count: prevState.count - 1
      }
    });
  }

  reset(){
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));