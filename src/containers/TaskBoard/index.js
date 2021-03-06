import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import TaskForm from '../TaskForm';
import TaskList from '../../components/TaskList';
import { STATUS } from '../../constants';
import styles from './styles';
import SearchBox from '../../components/search';
import Confirm from '../../commons/confirm';

class TaskBoard extends Component {

    state = {
        open: false
    }

    componentDidMount() {
        const { taskActionsCreators } = this.props;
        const { fetListTask } = taskActionsCreators;
        fetListTask();
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    addNewTask = () => {
        const { modalActionsCreators, taskActionsCreators } = this.props;
        const { showModal, changeModalTitle, changeModalContent, hideModal } = modalActionsCreators;
        const { taskEditing } = taskActionsCreators;
        taskEditing(null);
        showModal();
        changeModalTitle('Thêm mới công việc');
        changeModalContent(<TaskForm hideModal={hideModal} />);
    }

    showToast = () => {
        toast.success('Thành công!');
    }

    handleFilter = e => {
        const { taskActionsCreators } = this.props;
        const { filterTask } = taskActionsCreators;
        filterTask(e.target.value);
    }

    renderSearchBox() {
        let xhtml = null;
        xhtml = <SearchBox handleFilter={this.handleFilter} />;
        return xhtml;
    }

    handleClickEdit = task => {
        const { taskActionsCreators, modalActionsCreators } = this.props;
        const { taskEditing } = taskActionsCreators;
        taskEditing(task);
        const { showModal, changeModalTitle, changeModalContent, hideModal } = modalActionsCreators;
        showModal();
        changeModalTitle('Cập nhật công việc');
        changeModalContent(<TaskForm hideModal={hideModal} />);
    }

    handleClickDelete = task => {
        const { taskActionsCreators, modalActionsCreators } = this.props;
        const { showModal, changeModalTitle, changeModalContent, hideModal } = modalActionsCreators;
        showModal();
        changeModalTitle('Bạn có chắc chắc chắn xóa ?');
        const {delTaskRequest} = taskActionsCreators;
        changeModalContent(<Confirm confirm={() => delTaskRequest(task.id)} />);
    }

    render() {
        var listTask1 = this.props.listTask;
        return (
            <Fragment>
                <Button variant='contained' color='primary' onClick={this.addNewTask}>
                    <Add /> Add new task
                </Button>

                <Button variant='contained' color='primary' onClick={this.showToast}>
                    <Add /> Display Notification
                </Button>
                {this.renderSearchBox()}
                <Grid container spacing={1}>
                    {
                        STATUS.map((status, index) => {
                            if (listTask1 && listTask1.length > 0) {
                                var taskFilter = listTask1.filter(task => task.status === status.value);
                                return (
                                    <TaskList
                                        taskFilter={taskFilter}
                                        status={status}
                                        onClickDelete={this.handleClickDelete}
                                        onClickEdit={this.handleClickEdit}
                                    />
                                );
                            }
                        })
                    }
                </Grid>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        listTask: state.task.listTask,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        taskActionsCreators: bindActionCreators(taskActions, dispatch),
        modalActionsCreators: bindActionCreators(modalActions, dispatch)
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
