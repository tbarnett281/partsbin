import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import Hardware from './hardware/pages/Hardware';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Inventory from './user/pages/Inventory';
import Replacements from './user/pages/Replacements';
import RMA from './user/pages/RMA';
import UserRMAList from './hardware/pages/UserRMAList';
import HardwareItem from './hardware/components/HardwareItem';
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
            <Route path="/:id/rma" exact>
                <UserRMAList/>
            </Route>
            <Route path="/hardware/inventory" exact>
                <Inventory />
            </Route>
            <Route path="/hardware/replacements" exact>
                <Replacements />
            </Route>
            <Route path="/hardware/rma" exact>
                <RMA />
            </Route>

            <Redirect to ="/" />
            </Switch>
            </main>
        </Router>
    );
};

export default App;