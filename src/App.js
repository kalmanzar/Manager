import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAt2KiMl4qVmwNc9zVGq8C9jJrTkoLCfPQ',
      authDomain: 'manager-1d4de.firebaseapp.com',
      databaseURL: 'https://manager-1d4de.firebaseio.com',
      projectId: 'manager-1d4de',
      storageBucket: 'manager-1d4de.appspot.com',
      messagingSenderId: '721921601714'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
