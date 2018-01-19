import React, { Component } from 'react';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

import store from './store.js';
import Chat from './components/chat/Chat';
import { saveUserName } from './actions/ChatActions';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

class App extends Component {
    componentWillMount() {
        const { userName } = this.props;
        const { independed } = this.props;
        if (!independed && userName) {
            store.dispatch(saveUserName(this.props));
        }
    }
  render() {
    return (
        <Provider store={store}>
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <Chat 
                    height={this.props.height}
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