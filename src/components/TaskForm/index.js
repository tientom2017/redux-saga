import { Box, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var { classes, open, hideModal } = this.props;

        return (
            <form className={classes.form}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Tên công việc"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="desc"
                    label="Mô tả"
                    type="text"
                    fullWidth
                    mt={2}
                />
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                    <Button onClick={hideModal} color="primary">Cancel</Button>
                    <Button onClick={hideModal} color="primary">OK</Button>
                </Box>
            </form>
        );
    }
}

export default withStyles(styles)(TaskForm);
