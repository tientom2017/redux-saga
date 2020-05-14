import { withStyles } from '@material-ui/styles';
import styles from './style';
import SideBar from './SideBar';
import Header from './Header'
import React, { Component } from 'react';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { children, name, classes } = this.props;
        return (
            <div className={classes.dashboard}>
                <Header name={name} />
                <div className={classes.wrapper} className="wrap-content">
                    <div className={classes.sideBar}><SideBar /></div>
                    <div className={classes.wrapperContent}>{children}</div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(DashBoard);