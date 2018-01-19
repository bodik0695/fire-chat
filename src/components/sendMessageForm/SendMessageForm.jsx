import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addMessage } from '../../actions/ChatActions';
import { sendMessageFormStyle } from './sendMessageFormStyle';

const initialState = {
    message: ''
}

class SendMessageForm extends PureComponent {
    state = initialState

    onChangeValue = (e) => {
        const { value } = e.target;
        this.setState(() => ({
            message: value
        }));
    }

    onSendMessage = () => {
        const { message } = this.state;

        if (message) {
            this.props.addMessage(this.state);
            this.setState(initialState);
        }
    }
    render() {
        const { classes } = this.props;
        const { userName } = this.props;

        return(
            <Card className={classes.sendMessageForm}>
                <CardContent>
                    <Typography>
                        {userName}
                    </Typography>
                    <TextField 
                        placeholder='Сообщение'
                        name='name'
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

const StyledSendMessageForm = withStyles(sendMessageFormStyle)(SendMessageForm);

export default connect(
    state => ({
        messages: state.chat.messages,
        userName: state.autentification.userName
    }),
    dispatch => bindActionCreators({
        addMessage
    }, dispatch),
)(StyledSendMessageForm)