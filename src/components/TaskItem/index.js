import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes, val, status, onClickEdit } = this.props;

        return (
            <Card className={classes.root}>
                <CardContent>
                    <Grid item md={12} container justify="space-between">
                        <div><h3>{val.title}</h3></div>
                        <div>{status.label}</div>
                    </Grid>
                    <Grid item md={12} container>
                        <p>{val.description}</p>
                    </Grid>
                </CardContent>
                <CardActions className={classes.cardActions} >
                    <Fab color="primary" aria-label="add" onClick={onClickEdit}>
                        <EditIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit">
                        <DeleteIcon />
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);
