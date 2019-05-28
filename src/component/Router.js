import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from '../App';
import Detail from './Detail';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/Detail" component={App} exact/>
                <Route path="/Detail/:id" component={Detail} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router; 