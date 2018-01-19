import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    chat_messageList: {
        flex: 1,
        margin: '0px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        width: '100%',
        bottom: 0,
    }
});

class MessageList extends PureComponent{
    render() {
        const { classes } = this.props;        
        return (
            <Paper className={classes.chat_messageList}>
                {this.props.children.map(child => React.cloneElement(child,{}))}
            </Paper>
        )
    }
}

const StyledMessageList = withStyles(styles)(MessageList);

export default connect(
    state => ({
        messages: state.messages
    }),
    dispatch => bindActionCreators({

    }, dispatch)
)(StyledMessageList)