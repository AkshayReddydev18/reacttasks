import React, { Component } from 'react';

class EvenOddChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      result: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ number: event.target.value });
  };

  checkEvenOdd = () => {
    const { number } = this.state;
    const num = parseInt(number, 10);
    
    if (!isNaN(num)) {
      this.setState({
        result: num % 2 === 0 ? 'Even' : 'Odd'
      });
    } else {
      this.setState({ result: 'Please enter a valid number' });
    }
  };

  render() {
    const { number, result } = this.state;

    return (<>
      <div>
        <h1>Even or Odd Checker</h1>
        <input
          type="text"
          value={number}
          onChange={this.handleInputChange}
          placeholder="Enter a number"
        />
        <button onClick={this.checkEvenOdd}>Check</button>
        <h2>Result: {result}</h2>
      </div><hr/></>
    );
  }
}

export default EvenOddChecker;
