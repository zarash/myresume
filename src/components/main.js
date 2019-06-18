import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage'
import AboutMe from './aboutme';
import  Resume from './resume';
 

const _Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
    </Switch>
)

export default _Main;