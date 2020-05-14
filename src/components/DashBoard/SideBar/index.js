import { Drawer, ListItem, List } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import styles from './style';
import { ADMIN_ROUTES } from '../../../constants';
import {NavLink} from 'react-router-dom'


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }

    toggleDrawer = val => {
        this.setState({ open: val })
    }

    renderList() {
        const {classes} = this.props;
        let xhtml = null;
        xhtml = <div>
            <List className={classes.linkcs}>
                {ADMIN_ROUTES.map((route, idx) => (
                    <NavLink to={route.path} exact={route.exact} className={classes.linkcs} activeClassName={classes.activeLink}>
                        <ListItem key={idx} button>
                            {route.name}
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>

        return xhtml;
    }

    render() {
        const { open } = this.state;
        const {classes} = this.props;
        return (
            <Drawer className={classes.drawer} variant='persistent' open={open} onClose={() => this.toggleDrawer(false)}>
                {this.renderList()}
            </Drawer>
        );
    }
}

export default withStyles(styles)(SideBar);