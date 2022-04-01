import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import Hardware from './hardware/pages/Hardware';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
    return( 
        <Router>
            <MainNavigation />
            <main>
            <Switch>
            <Route path="/" exact>
                <Users />
            </Route>
            <Route path="/hardware/new" exact>
                <Hardware />
            </Route>
            <Redirect to ="/" />
            </Switch>
            </main>
        </Router>
    );
};

export default App;