import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.components'
import UserCreate from './components/user-create.components'
import ExCreate from './components/ex-create.components'
import ExUpdate from './components/ex-update.components'
import ExList from './components/ex-list.components'


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
        <Navbar />
        <br/>
        <Route path='/' exact component={ExList} />
        <Route path='/edit/:id' exact component={ExUpdate} />
        <Route path='/create' exact component={ExCreate} />
        <Route path='/user' exact component={UserCreate} />
        </div>
      </Router>
    );
  }
}
