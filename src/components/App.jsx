import React, { Component } from "react";
import { Feedbacks } from "./Feedbacks/Feedbacks";
import { Phonebook } from "./Phonebook/Phonebook";

export class App extends Component {

  static defaultProps = {};
  static propTypes = {}; 
  
  render() {
    return (
    <div>        
        <Feedbacks/>
        <Phonebook/>        
    </div>      
  );
  }
}

