import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import { Refresh } from 'material-ui-icons';

import Message from '../message/Message';
import MessageList from '../messageList/MessageList';
import AutentificationForm from '../autentificationFrom/AutentificationForm';
import SendMessageForm from '../sendMessageForm/SendMessageForm';
import { loadUserName, loadMessages, saveUserName } from '../../actions/ChatActions';
import { chatStyle } from './chatStyle';

class Chat extends PureComponent {
    state = {
        userName: ''
    }
    componentWillMount() {
        if (this.props.independed) {
            this.props.loadUserName();
        } else {
            this.props.saveUserName({
                userName: this.props.userName
            });
        }
    }
    componentWillReceiveProps(nextState) {
        const { loadedUserName } = nextState;
        this.setState({
            userName: loadedUserName
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div 
                style={{height: `${this.props.height}px`}}
                className={classes.chat}
            >
                
                <IconButton 
                className={classes.updateBtn}
                title='Обновить список сообщений'
                >
                    <Refresh />
                </IconButton>                         
                <MessageList classNmae={classes.chat_messageList}>
                    {
                        this.props.messages.map((message, index )=> (
                            <Message
                                key={index}
                                userName={this.props.loadedUserName}
                                message={message.message}/>
                        ))
                    }
                </MessageList>
                {this.state.userName ? <SendMessageForm /> : <AutentificationForm />}
            </div>
        )
    }
}

const StyledChat = withStyles(chatStyle)(Chat);

export default connect(
    state => ({
        messages: state.chat.messages,
        loadedUserName: state.autentification.userName
    }),
    dispatch => bindActionCreators({
        loadUserName,
        loadMessages,
        saveUserName
    }, dispatch)
)(StyledChat)