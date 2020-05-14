import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import DashBoard from '../../../components/DashBoard';

class AdminLayoutRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {component: YourComponent, ...remainProps} = this.props;
        return (
            <Route 
                {...remainProps}
                render = {routerProps => {
                    return (
                        <DashBoard {...remainProps}>
                            <YourComponent />
                        </DashBoard>
                    )
                }}
            />
        )
    }
}
 
export default AdminLayoutRoute;