import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

const AppcuesRouter = () => {
    const location = useLocation();

    useEffect(() => {
        window.Appcues.page();
    }, [location]);

    return (
        <div id="main-app">
        <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/create" component={Create} />
                <Route path="/blogs/:id" component={BlogDetails} />
                <Route path="*" component={NotFound} />
              </Switch>
          </div>
    );
}

export default AppcuesRouter;