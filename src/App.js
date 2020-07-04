import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import AuthUserContainer from './component/AuthUser/AuthUserContainer';
import ContactsContainer from './component/Contacts/ContactsContainer';
import PrivateRouteContainer from './component/PrivateRouter/PrivateRouteContainer';
import HeaderContainer from './component/Header/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Route path='/' render={() => <Redirect to='/auth' />} />
      <PrivateRouteContainer redirect='/contact' path='/auth' component={AuthUserContainer} />
      <PrivateRouteContainer redirect='/auth' path='/contact' component={ContactsContainer} />
    </div>
  );
}

export default App;
