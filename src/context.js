import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

// reducer: (prevState, action) => newState
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      console.log('DELETE_CONTACT');
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case 'ADD_CONTACT':
      console.log('ADD_CONTACT');
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    case 'UPDATE_CONTACT':
      console.log('UPDATE_CONTACT');
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({ contacts: res.data });
  }

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;
