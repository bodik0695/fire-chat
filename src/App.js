import React, { Component } from 'react';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

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
                    height={this.props.height}
                    independed={this.props.independed}
                    userName={this.props.userName}
                />
            </JssProvider>
        </Provider>
    );
  }
}

export default App;

App.defaultProps = {
    height: 320,
    independed: true,
    userName: ''
}
