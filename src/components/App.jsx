import React, { Component } from "react";
import { ShowResults } from "./ShowResults/ShowResults";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section/Section";

export class App extends Component {

  static defaultProps = {};

  static propTypes = {};

  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  incrementCounter = (ev) => {    
    this.setState(prevState => ({ [ev.target.name]: prevState[ev.target.name] + 1 }));
    // console.log([ev.target.name]);
  }

  
  
  render() {
    return (
    <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.incrementCounter}></FeedbackOptions>   
        </Section>  
        <Section title={'statistics'.toUpperCase()}>
          <ShowResults state={this.state} />
        </Section>
    </div>  
    
  );
  }
}

