import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import Footer from './componets/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './componets/Booking/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        <Header> </Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/home/:id'>
           <Booking></Booking>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
