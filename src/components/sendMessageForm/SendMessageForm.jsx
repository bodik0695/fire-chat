import React, { PureComponent } from 'react';
import { Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addMessage } from '../../actions/ChatActions';

const styles = theme => ({
    sendMessageForm: {
        position: 'relative',
        width: '100%',
        bottom: 5,
    }
});
const initialState = {
    message: ''
}

class SendMessageForm extends PureComponent {
    state = initialState

    onChangeValue = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    onSendMessage = () => {
        const { message } = this.state
        if (message) {
            this.props.addMessage(this.state);
            this.setState(initialState);
        }
    }
    render() {
        const { classes } = this.props;
        const authorizationUserName = this.props.userName;
        return(
            <Card className={classes.sendMessageForm}>
                <CardContent>
                    <Typography>
                        {authorizationUserName}
                    </Typography>
                    <TextField 
                        placeholder='Сообщение'
                        name = 'name'
                        color= 'primary'
                        fullWidth
                        multiline
                        rowsMax='2'
                        value={this.state.message}
                        onChange={this.onChangeValue}
                    />
                    <Button
                        title='Отправить сообщение'
                        onClick={this.onSendMessage}
                    >
                        Отправить
                    </Button>
                </CardContent>
            </Card>
        )
    }
}

const StyledSendMessageForm = withStyles(styles)(SendMessageForm);

export default connect(
    state => ({
        messages: state.chat.messages,
        userName: state.autentification.userName
    }),
    dispatch => bindActionCreators({
        addMessage
    }, dispatch),
)(StyledSendMessageForm)