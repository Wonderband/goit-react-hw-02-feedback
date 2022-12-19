import React, { Component } from "react";
import { ShowResults } from "./ShowResults/ShowResults";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section/Section";
import { nanoid } from 'nanoid'

export class App extends Component {

  static defaultProps = {};

  static propTypes = {};

  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  contacts: [],
  name: '',
  
}
  incrementCounter = (ev) => {    
    this.setState(prevState => ({ [ev.target.name]: prevState[ev.target.name] + 1 }));
    // console.log([ev.target.name]);
  }

  isEmpty = () => { 
    let sum = 0;
    // console.log(this.state.entries());
    Object.values(this.state).forEach(value => sum += value);
    console.log(sum);
    return sum;
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    const newName = { name: e.target.name.value.trim(), id: nanoid() };    
    this.setState(prevState => { return { contacts: [...prevState.contacts, newName] } });
  }
  
  render() {
    return (
    <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.incrementCounter}></FeedbackOptions>   
        </Section>  
        <Section title={'statistics'.toUpperCase()} >
          <ShowResults state={this.state} />
        </Section>
        <Section title={'Phonebook'} >
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </label>
            <button type='submit'>Add contact</button>
          </form>
        </Section>
        <Section title={'Contacts'} >
          <ul>
            {this.state.contacts.map(item => (
                <li key={item.id}>                  
                  {item.name}
                </li>
                )
              )
            }
          </ul>
        </Section>
       
    </div>      
  );
  }
}

