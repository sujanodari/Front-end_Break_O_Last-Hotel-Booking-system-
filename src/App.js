import React from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
 import Register from './components/register/Register';
 import Dashboard from './components/dashboard/Dashboard'
 import About from './components/about/about'
 import Profile from './components/profile/profile'
 import Book from './components/book/Book'


function App(){
    return(
        <Container>
            <BrowserRouter>
            <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/book' component={Book}/>
            </Switch>
            </BrowserRouter>
     
          
        </Container>
    );
}

export default App;