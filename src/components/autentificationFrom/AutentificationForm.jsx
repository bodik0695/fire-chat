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

import { saveUserName } from '../../actions/ChatActions';

const styles = theme => ({
    autentificationForm: {
        position: 'relative',
        width: '100%',
        bottom: 5,
    },
    // message_text: {
    //     whiteSpace: 'nowrap',
    //     overflow: 'hidden',
    //     textOverflow: 'ellipsis',
    // }
});

class AutentificationForm extends PureComponent {
    state = {
        userName: ''
    }
    componentWillMount() {
    }
    onChangeValue = (e) => {
        const target = e.target;
        this.setState((prevState) => ({
            ...prevState.form,
            [target.name]: target.value
            
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
                        name = 'userName'
                        color= 'primary'
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

const StyledAutentificationForm = withStyles(styles)(AutentificationForm);

export default connect(
    state => ({
        messages: state.messages
    }),
    dispatch => bindActionCreators({
        saveUserName
    }, dispatch),
)(StyledAutentificationForm)