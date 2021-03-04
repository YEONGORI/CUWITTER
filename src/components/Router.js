// 라우터는 Component이다

import React, { useState }from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Auth from '../routes/Auth';
import Home from '../routes/Home';


const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  return (
    <Router>
      <Switch>
        {isLoggedIn ?
        <>
        {/* <> : 많은 element 들을 render 할때 사용 */}
        <Route exact path="/">
          <Home />
        </Route> 
        </> : 
        <Route exact path="/">
          <Auth />
        </Route>}
        
      </Switch>
    </Router>
  );
}

export default AppRouter;