import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { saveUserName } from '../../actions/ChatActions';
import { autentificationFormStyle } from './autentificationFormStyle';

class AutentificationForm extends Component {
    state = {}

    onChangeValue = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    sendUserName = () => {
        this.props.saveUserName(this.state);
    }
    
    render() {
        const { classes } = this.props;

        return(
            <Card className={classes.autentificationForm}>
                <CardContent>
                    <TextField 
                        label='Введите имя'
                        name='userName'
                        color='primary'
                        fullWidth
                        onChange={this.onChangeValue}
                    />
                    <Button
                        onClick={this.sendUserName}
                    >
                        Войти
                    </Button>
                </CardContent>
            </Card>
        )
    }
}

const StyledAutentificationForm = withStyles(autentificationFormStyle)(AutentificationForm);

export default connect(
    state => ({
        messages: state.messages
    }),
    dispatch => bindActionCreators({
        saveUserName
    }, dispatch),
)(StyledAutentificationForm)