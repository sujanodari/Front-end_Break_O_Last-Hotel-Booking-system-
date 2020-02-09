import React from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
 import Register from './components/register/Register';
 import Dashboard from './components/dashboard/Dashboard'


function App(){
    return(
        <Container>
            <BrowserRouter>
            <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            </Switch>
            </BrowserRouter>
     
          
        </Container>
    );
}

export default App;