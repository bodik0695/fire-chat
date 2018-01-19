import React, { Component } from 'react';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

// import logo from './logo.svg';
// import './App.css';
import store from './store.js';
import Chat from './components/chat/Chat';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <Chat 
                    height={400}
                    // independed={false}
                    userName='Tom'
                />
            </JssProvider>
        </Provider>
    );
  }
}

export default App;
