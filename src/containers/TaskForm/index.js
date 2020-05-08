import { Box, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as TaskActions from '../../actions/task';
import renderTextField from '../../components/FormHelper/TextField';
import renderSelectField from '../../components/FormHelper/SelectField';
import styles from './styles';
import { STATUS } from '../../constants';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmitForm = data => {
        const { addTaskRequest } = this.props.TaskActionsCreator;
        addTaskRequest(data.title, data.desc, data.email);
    }

    renderSelection() {
        debugger;
        const { taskEditing, classes } = this.props;
        let xhtml = null;
        console.log('task: ', taskEditing);
        if (taskEditing && taskEditing.id && taskEditing.id != null) {
            xhtml = (
                <Grid item md={12}>
                    <Field
                        id="select"
                        label="Trạng thái"
                        multiline
                        rowsMax="4"
                        className={classes.selection}
                        margin="normal"
                        name="select"
                        component={renderSelectField}
                        fullWidth
                    >
                        <option value={STATUS[0].value}>Ready</option>
                        <option value={STATUS[1].value}>Process</option>
                        <option value={STATUS[2].value}>Completed</option>
                    </Field>
                </Grid>)
        }
        return xhtml;
    }

    render() {
        var { classes, hideModal, handleSubmit, invalid, submitting } = this.props;
        return (
            <form className={classes.form} onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Grid container>
                    <Grid item md={12}>
                        <Field
                            id="title"
                            label="Tiêu đề"
                            className={classes.textField}
                            margin="normal"
                            name="title"
                            component={renderTextField}
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            id="description"
                            label="Mô tả"
                            multiline
                            rowsMax="4"
                            className={classes.textField}
                            margin="normal"
                            name="description"
                            component={renderTextField}
                            fullWidth
                        />
                    </Grid>
                    {this.renderSelection()}
                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse" mt={2}>
                            <Box ml={1}>
                                <Button variant="contained" onClick={hideModal}>
                                    Hủy Bỏ
                                </Button>
                            </Box>
                            <Button
                                disabled={invalid || submitting}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Lưu Lại
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}


const mapStateToProps = state => ({
    taskEditing: state.task.taskEditing,
    initialValues: state.task.taskEditing,
});

const mapDispatchToProps = dispatch => ({
    TaskActionsCreator: bindActionCreators(TaskActions, dispatch),
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const TASK_NAME = 'TASK MANAGEMENT';

const withReduxForm = reduxForm({
    form: TASK_NAME
});

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(TaskForm);
