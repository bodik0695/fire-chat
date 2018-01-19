import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { Paper } from 'material-ui';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { blue, grey } from 'material-ui/colors';
import { Refresh } from 'material-ui-icons';

import Message from '../message/Message';
import MessageList from '../messageList/MessageList';
import AutentificationForm from '../autentificationFrom/AutentificationForm';
import SendMessageForm from '../sendMessageForm/SendMessageForm';
import { loadUserName, loadMessages, saveUserName } from '../../actions/ChatActions';

const styles = theme => ({
    chat: {
        display: 'flex',
        overflow: 'hidden',
        background: grey[200],
        width: '100%',
        flexDirection: 'column',
    },
    updateBtn: {
        margin: 0,
        display: 'block',
        position: 'absolute',
        top: '15px',
        right: '17px',
        padding: '5px',
        color: blue[500],
        border: `1px solid ${blue[500]}`,
    }
});

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
        // this.props.loadMessages();
    }
    componentWillReceiveProps(nextState) {
        const { userName } = nextState;
        this.setState({
            userName
        });
    }
    render() {
        const { classes } = this.props;
        console.log(this.props);
        return (
            <div 
                style={{height: this.props.height}}
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

const StyledChat = withStyles(styles)(Chat);

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

StyledChat.defaultProps = {
    height: '320px',
    independed: true,
    userName: ''
}