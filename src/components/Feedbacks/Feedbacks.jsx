import React, { Component } from "react";
import { ShowResults } from "../ShowResults/ShowResults";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions"
import { Section } from "../Section/Section";
export class Feedbacks extends Component {
  
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
}
  incrementCounter = (ev) => {    
    this.setState(prevState => ({ [ev.target.name]: prevState[ev.target.name] + 1 }));    
    }   
    
  render() { 
    return (
        <div>
            <Section title={'Please leave feedback'}>
                <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.incrementCounter}>
                </FeedbackOptions>   
            </Section>  
            <Section title={'statistics'.toUpperCase()} >
                <ShowResults state={this.state} />
            </Section>
        </div>
    )}
}


