import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

// @see https://reacttraining.com/react-router/web/guides/quick-start

const RouterDemo1 = () => {
    return (
        <BrowserRouter>
            <h1>Router Demo 1</h1>
            <nav>
                <ul>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/page2/myId">Page2</Link></li>
                </ul>
            </nav>
            <div className="page-container">
                <Switch>
                    <Route exact path="/page1">
                        <Page1 />
                    </Route>
                    <Route exact path="/page2/:id">
                        <Page2 />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default RouterDemo1;