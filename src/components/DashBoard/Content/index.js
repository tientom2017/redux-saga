import { withStyles } from '@material-ui/styles';
import styles from './style';

import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div></div>
        );
    }
}

export default withStyles(styles)(Content);