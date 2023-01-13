
import './App.css';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Info from './Components/pages/Info';
import Program from './Components/pages/Program';
import Tickets from './Components/pages/Tickets';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import IntrebariFrecvente from './Components/pages/IntrebariFrecvente';
import MoviePage from './Components/pages/MoviePage';
import OutdoorCinema from './Components/pages/OutdoorCinema';
import OutdoorCinemaWeather from './Components/pages/OutdoorCinemaeather';
import SignUp from './Components/pages/SignUp';
import Register from './Components/pages/Register';
import QA from './Components/pages/QA';
import Cont from './Components/pages/Cont';
import AdminUser from './Components/pages/AdminUser';



function App() {
  
  return (
    <>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/info" exact component={Info}/>
        <Route path="/program" exact component={Program}/>
        <Route path="/profil" component={Cont} />
        <Route path="/tickets" exact component={Tickets}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/fa" exact component={IntrebariFrecvente} />
        <Route path="/info-preturi" exact component={Info} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/outdoor" component={OutdoorCinema} />
        <Route path="/outdoor_weather" component={OutdoorCinemaWeather} />
        <Route path="/signup" component={SignUp} />
        <Route path="/register" component={Register} />
        <Route path="/qa" component={QA} />
        <Route path="/admin-useri" component={AdminUser} />
        
      </Switch>
      </Router>
    </>
  );
}

export default App;
