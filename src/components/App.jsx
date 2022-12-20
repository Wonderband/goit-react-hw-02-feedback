import React, { Component } from "react";
import { Feedbacks } from "./Feedbacks/Feedbacks";
import { Phonebook } from "./Phonebook/Phonebook";

export class App extends Component {
  
  render() {
    return (
    <div>        
        <Feedbacks/>
        <Phonebook/>        
    </div>      
  );
  }
}

