import React, { PureComponent } from 'react';
import { Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = theme => ({
    message: {
        width: '100%',
        margin: '13px',
    },
    message_text: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
});

class Message extends PureComponent {
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.message}>
                <CardContent>
                        <Typography type='title' paragraph>
                            {this.props.userName}
                        </Typography>
                        <Typography>
                            {this.props.message}
                        </Typography>
                </CardContent>
            </Card>
        )
    }
}

const StyledMessage = withStyles(styles)(Message);

export default connect(
    state => ({
    }),
    dispatch => bindActionCreators({
    }, dispatch),
)(StyledMessage)