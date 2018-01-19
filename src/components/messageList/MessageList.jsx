import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import { messageListStyle } from './messageListStyle';

class MessageList extends PureComponent{
    render() {
        const { classes } = this.props;  

        return (
            <Paper className={classes.chat_messageList}>
                {this.props.children}
            </Paper>
        )
    }
}

const StyledMessageList = withStyles(messageListStyle)(MessageList);

export default connect(
    state => ({
        messages: state.messages
    }),
    dispatch => bindActionCreators({

    }, dispatch)
)(StyledMessageList)