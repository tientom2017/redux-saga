import { Box, Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../FormHelper/TextField';
import styles from './styles';
import {required} from '../FormHelper/Validate/FieldLevelValidationForm';

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
                <Field name="title" component={renderTextField} label="Tiêu đề" className={classes.testField} fullWidth validate={[required]} />
                <Field name="desc" component={renderTextField} label="Mô tả" className={classes.testField} fullWidth validate={[required]} />
                <Field name="email" component={renderTextField} label="Email" className={classes.testField} fullWidth validate={[required]} />
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
