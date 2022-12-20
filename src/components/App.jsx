import React, { Component } from "react";
import { ShowResults } from "./ShowResults/ShowResults";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section/Section";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";

export class App extends Component {

  static defaultProps = {};

  static propTypes = {};

  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: '',
  
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
    const newContact = {
      name: e.target.name.value.trim(),
      number: e.target.number.value,
      id: nanoid()
    };    
    this.setState(prevState => { return { contacts: [...prevState.contacts, newContact] } });
  }

  filterHandle = (e) => { 
    // console.log(this.state);
    this.setState({filter: e.target.value.toLowerCase().trim()});
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
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button type='submit'>Add contact</button>
          </form>
        </Section>
        <Section title={'Contacts'} >
          <Filter filter={this.state.filter} filterHandle={this.filterHandle } />
          <ul>
            {this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter))
              .map(item => (
                <li key={item.id}>                  
                {item.name}
                { item.number}
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

