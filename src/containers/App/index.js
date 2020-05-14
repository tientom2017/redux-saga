import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';
import theme from '../../commons/Theme';
import GlobalLoading from '../../components/globalLoading';
import CommonModal from '../../components/Modal';
import { ADMIN_ROUTES } from '../../constants';
import configureStore from '../../redux/configureStore';
import styles from './styles';
import TaskBoard from '../TaskBoard';
import CssBaseline from '@material-ui/core/CssBaseline';

const store = configureStore();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderAdminRoutes() {
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map(route => {
            return (
                <AdminLayoutRoute
                    key={route.path}
                    path={route.path}
                    name={route.name}
                    exact={route.exact}
                    component={route.component}
                />
            )
        })
        return xhtml;
    }

    render() {
        const { classes } = this.props
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                    <CssBaseline />
                        <div className={classes.wapper}>
                            <ToastContainer />
                            <CommonModal />
                            <GlobalLoading />
                            {/* <TaskBoard /> */}
                            <Switch>
                                {this.renderAdminRoutes()}
                            </Switch>
                        </div>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
