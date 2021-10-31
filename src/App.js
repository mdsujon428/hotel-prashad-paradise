import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import Footer from './componets/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './componets/Booking/Booking';
import Login from './componets/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header> </Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/home/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
