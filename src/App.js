import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import Hardware from './hardware/pages/Hardware';


const App = () => {
    return( 
        <Router>
            <Switch>
            <Route path="/" exact>
                <Users />
            </Route>
            <Route path="/hardware/new" exact>
                <Hardware />
            </Route>
            <Redirect to ="/" />
            </Switch>
        </Router>
    );
};

export default App;