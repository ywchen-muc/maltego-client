import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Graphpage from '../pages/Graphpage';
import "./App.css";

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Switch>
                <Route component={Homepage} path="/" exact={true} />
                <Route component={Graphpage} path="/:id" />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
