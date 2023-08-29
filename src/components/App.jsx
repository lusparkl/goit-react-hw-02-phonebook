import { Component } from "react";
import { AddContactForm } from "./AddContactForm/AddContactForm";
export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  onAppendToContacts = contact => { if (this.isPossiblyToAppend()) this.setState(prevState => prevState.contacts.push(contact)) };
  
  isPossiblyToAppend = name => {
    let possiblyToAppend;
    this.state.contacts.forEach((contact) => {
      if (name.toLowerCase() !== contact.name.toLowerCase()) {
        possiblyToAppend = true;
      } else {
        possiblyToAppend = false;
        alert(`${name} is alredy in your contacts.`)
      }
    })
    return possiblyToAppend;
  };

  deleteContact = id => {
    this.setState(prevState => prevState.contact.filter(contact => contact.id !== id))
  };

  findContact = searchQuery => {
    this.setState(prevState => prevState.contact.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase())))
  };
  
  render() {
    return (
      <>
      <AddContactForm/>
      </>
    )
  }
}
