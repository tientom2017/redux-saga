import { Box, Modal } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../actions/modal';
import styles from './styles';


class CommonModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes, open, handleClose, component, modalActionsCreator, title } = this.props;
        const { hideModal } = modalActionsCreator;
        return (
            <Modal open={open} onClose={hideModal}>
                <div className={classes.paper}>
                    <div className={classes.header}>
                        <Box display="flex" justifyContent="space-between">
                            <span>{title}</span>
                            <div style={{cursor: 'pointer'}}>
                                <HighlightOffIcon onClick={hideModal} />
                            </div>
                        </Box>
                    </div>
                    {component}
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title
});

const mapDispatchToProps = dispatch => ({
    modalActionsCreator: bindActionCreators(modalActions, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect
)(CommonModal);
