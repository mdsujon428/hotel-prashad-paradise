import './App.css';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import Footer from './componets/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './componets/Booking/Booking';
import Login from './componets/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute';
import AddNewService from './componets/Home/Services/AddNewService/AddNewService';
import { NotFound } from 'http-errors';
import MyOrders from './componets/MyOrders/MyOrders';

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
            <Route path='/addService'>
              <AddNewService></AddNewService>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
