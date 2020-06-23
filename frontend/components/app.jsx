import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import AuthRoute from '../util/route_util';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Seen it!</h1>
            </Link>
            <GreetingContainer/>
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={MovieIndexContainer} />
    </div>
);

export default App;