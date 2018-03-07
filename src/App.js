import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
