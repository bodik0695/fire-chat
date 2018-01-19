import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { messageStyle } from './messageStyle';

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

const StyledMessage = withStyles(messageStyle)(Message);

export default connect(
    state => ({
    }),
    dispatch => bindActionCreators({
    }, dispatch),
)(StyledMessage)