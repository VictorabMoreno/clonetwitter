import { Home, Explore, Notification } from '../src/Pages/pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/explore' component={Explore} />
       <Route path='/notification' component={Notification} />
      </Switch>
    </Router>
  );
}

export default App;
