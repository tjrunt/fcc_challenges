//
//React: Use State to Toggle an Element

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility(){
   		this.setState({
			visibility: !this.state.visibility
		});
	}
  
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};





//
//React: Write a Simple Counter
//

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
    this.increment =this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // change code above this line
  }
  // change code below this line
  increment(){
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement(){
    this.setState({
      count: this.state.count - 1
    });
  }
  reset(){
    this.setState({
      count: 0
    });
  }

  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
