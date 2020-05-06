import { withStyles } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import LoadingIcon from '../../assets/images/load1.gif';
import styles from './styles';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as uiAction from '../../actions/ui';

class GlobalLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes, isLoading } = this.props;
        return (
            <div>
                {
                    isLoading ? (
                        <div className={classes.globalLoading}>
                            <img className={classes.icon} src={LoadingIcon}></img>
                        </div>
                    ) : ''
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isLoading: state.ui.isShowLoading,
    };
};

const mapDispatchToProps = (state, dispatch) => {
    return {
        uiAction: bindActionCreators(uiAction, dispatch)
    };
};

const withConnect = connect(mapStateToProps, null);
export default compose(
    withStyles(styles),
    withConnect,
)(GlobalLoading);
