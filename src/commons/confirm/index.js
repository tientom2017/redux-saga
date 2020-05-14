import { Box, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as ModalActions from '../../actions/modal';
import styles from './styles';

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmitForm = () => {
        const { confirm, modalActionsCreators } = this.props;
        const { hideModal } = modalActionsCreators;
        confirm();
        hideModal();
    }

    render() {
        var { modalActionsCreators } = this.props;
        const { hideModal } = modalActionsCreators;
        return (
            <Grid container>
                <Grid item md={12}>
                    <Box display="flex" flexDirection="row-reverse" mt={2} mb={2} mr={2}>
                        <Box ml={1}>
                            <Button variant="contained" onClick={hideModal}>CANCEL</Button>
                        </Box>
                        <Button onClick={this.handleSubmitForm} >OK</Button>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    taskEditing: state.task.taskEditing,
    initialValues: state.task.taskEditing,
});

const mapDispatchToProps = dispatch => ({
    modalActionsCreators: bindActionCreators(ModalActions, dispatch),
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withStyles(styles),
    withConnect,
)(Confirm);
