import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Header from './Header';
import SideBar from './SideBar';
import styles from './style';
import * as uiAction from '../../actions/ui';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { children, name, classes, uiActionToggle, isToggleSideBar } = this.props;
        console.log(uiAction);
        const {toggleSideBar} = uiActionToggle;
        return (
            <div className={classes.dashboard}>
                <Header toggleSideBar={toggleSideBar} name={name} />
                <div className={classes.wrapper} className="wrap-content">
                    {isToggleSideBar ? <div className={classes.sideBar}><SideBar /></div> : ''}
                    <div className={classes.wrapperContent}>{children}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isToggleSideBar: state.ui.isToggleSideBar,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        uiActionToggle: bindActionCreators(uiAction, dispatch)
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect,
)(DashBoard);
