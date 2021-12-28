import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <Home />
          {/* <Homebody /> */}
          <Switch>
            <Route exact path="/">
              
            </Route>
            <Route path="/create">
            
            </Route>
            <Route path="/blogs/:id">
             
            </Route>
          </Switch>
       
      </div>
    </Router>
  );
}

export default App;
