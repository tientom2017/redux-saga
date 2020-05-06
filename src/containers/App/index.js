import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../../commons/Theme';
import GlobalLoading from '../../components/globalLoading';
import CommonModal from '../../components/Modal';
import configureStore from '../../redux/configureStore';
import TaskBoard from '../TaskBoard';
import styles from './styles';

const store = configureStore();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <ToastContainer />
                    <CommonModal />
                    <GlobalLoading />
                    <TaskBoard />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
