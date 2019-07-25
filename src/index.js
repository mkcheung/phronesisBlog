import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory} from 'react-router';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom'

import SignIn from './components/Signin';


// ReactDOM.render(<SignIn />, document.getElementById('root'));
ReactDOM.render(
	<BrowserRouter history={browserHistory}>
        <Route component={SignIn} path="/"></Route>
    </BrowserRouter>,
	document.getElementById('root')
);