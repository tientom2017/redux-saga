import { Box, Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../FormHelper/TextField';
import styles from './styles';
import {required, email} from '../FormHelper/Validate/FieldLevelValidationForm';
import {connect} from 'react-redux';
import * as TaskActions from '../../actions/task'

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmitForm = data => {
        const {addTaskRequest} = this.props.TaskActionsCreator;
        addTaskRequest(data.title, data.desc, data.email);
    }

    render() {
        var { classes, hideModal, handleSubmit, invalid, submitting } = this.props;
        console.log(this.props);
        return (
            <form className={classes.form} onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Field name="title" component={renderTextField} label="Tiêu đề" className={classes.testField} fullWidth validate={[required]} />
                <Field name="desc" component={renderTextField} label="Mô tả" className={classes.testField} fullWidth validate={[required]} />
                <Field name="email" component={renderTextField} label="Email" className={classes.testField} fullWidth validate={[required, email]} />
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                    <Button onClick={hideModal} color="primary">Cancel</Button>
                    <Button disabled={invalid || submitting} type="submit" color="primary">OK</Button>
                </Box>
            </form>
        );
    }
}

const TASK_NAME = 'TASK MANAGEMENT';

const withReduxForm = reduxForm({
    form: TASK_NAME
});

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    TaskActionsCreator: bindActionCreators(TaskActions, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withReduxForm,
    withConnect
)(TaskForm);
