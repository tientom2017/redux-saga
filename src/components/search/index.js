import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import { withStyles } from '@material-ui/core';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    OnhandleChange = (e) => {
        this.props.handleFilter(e);
    }

    render() {
        const {classes, handleChange} = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-required" label="Search" defaultValue="" onChange={this.OnhandleChange} />
            </form>
        );
    }
}

export default withStyles(styles)(SearchBox);
