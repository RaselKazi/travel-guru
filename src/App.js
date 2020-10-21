import React, { createContext, useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";
import './App.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home';
import Travel from './Components/Travel/Travel';
import NoMatch from './Components/NoMatch/NoMatch';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';


export const UserContext = createContext();
    
function App() {

  const [loggedIn,setLoggedIn]= useState({})
  const [place, setplace] = useState([]);

 

  return (
        
      <div className="App">
        <UserContext.Provider value={[place, setplace, loggedIn, setLoggedIn]}>
            <Router>
               
                <Switch>
                    <Route path='/home'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/Booking'>
                        <Booking></Booking>
                    </Route>
                    <Route exact path='/login'>
                        <Login></Login>
                    </Route>
                    <PrivateRoute path="/travel">
                        <Travel></Travel>
                    </PrivateRoute>
                    <Route path='*'>
                        <NoMatch></NoMatch>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
        </div>
  );
}

export default App;
