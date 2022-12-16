import React, { Component } from "react";
import { ShowResults } from "./ShowResults/ShowResults";

export class App extends Component {

  static defaultProps = {};

  static propTypes = {};

  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  incrementCounter = (ev) => {    
    this.setState(prevState => ({ [`${ev.target.name}`]: prevState[`${ev.target.name}`] + 1 }));
    console.log(this.state[`${ev.target.name}`]);
  }

  
  
  render() {
    return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <h2>Please leave feedback</h2>
      <div>
        <button type='button' name = 'good' onClick={this.incrementCounter}>Good</button>
        <button type='button' name = 'neutral' onClick={this.incrementCounter}>Neutral</button>
        <button type='button' name = 'bad' onClick={this.incrementCounter}>Bad</button>
      </div>
        <ShowResults state = { this.state} />
    </div>  
    
  );
  }
}

