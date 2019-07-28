import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory} from 'react-router';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom'

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


// ReactDOM.render(<SignIn />, document.getElementById('root'));
ReactDOM.render(
	<BrowserRouter history={browserHistory}>
        <Route exact component={SignIn} path="/"></Route>
        <Route exact component={SignUp} path="/signup"></Route>
    </BrowserRouter>,
	document.getElementById('root')
);