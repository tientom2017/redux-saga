import { Box, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import styles from './styles';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmitForm = data => {
        console.log(data);
    }

    render() {
        var { classes, hideModal, handleSubmit } = this.props;
        return (
            <form className={classes.form} onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Field name="title" component="input" />
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
                    <Button type="submit" color="primary">OK</Button>
                </Box>
            </form>
        );
    }
}

const TASK_NAME = 'TASK MANAGEMENT';

const withReduxForm = reduxForm({
    form: TASK_NAME
});

export default compose(
    withStyles(styles),
    withReduxForm
)(TaskForm);
