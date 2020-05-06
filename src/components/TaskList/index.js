import React, { Component } from 'react';
import styles from './style';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TaskItem from '../../components/TaskItem';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { status, taskFilter, classes } = this.props;
        return (
            <Grid key={taskFilter.id} container item md={4}>
                <div style={{ width: '100%' }} className={classes.status}>{status.label}</div>
                <div className={classes.wrapperListTask}>
                    {taskFilter.map((val) => {
                        return (
                            <TaskItem status={status} val={val} />
                        );
                    })}
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);