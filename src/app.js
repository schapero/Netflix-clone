import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home,Browse,Signup,Signin } from './pages';
import * as ROUTES from "./constants/routes";
import {IsUserRedirect,ProtectedRoute} from './helpers/routes';
import { useAuthListener } from './hooks';
function App() {
  const {user} = useAuthListener();
  return (
    <Router>

      <IsUserRedirect 
          user ={user}
          loggedInPath= {ROUTES.BROWSE}
          path ={ROUTES.HOME}
          exact
        >
          <Home />
      </IsUserRedirect>

      <IsUserRedirect 
          user ={user}
          loggedInPath= {ROUTES.BROWSE}
          path ={ROUTES.SIGN_UP}
          exact
        >
          <Signup />
      </IsUserRedirect>

      <IsUserRedirect 
          user ={user}
          loggedInPath= {ROUTES.BROWSE}
          path ={ROUTES.SIGN_IN}
          exact
        >
          <Signin />
      </IsUserRedirect>

      <ProtectedRoute user ={user} path ={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>
    </Router>
    );
    
  }

export default App;
