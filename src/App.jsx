import {Books, Messages, Home,Notification, Mentions, Exploreentreterimento, Exploresports, Explorenews, Exploretrending, Explorecovid, Exploreforyou, Profile, Lists } from '../src/Pages/pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Switch>
       <Route path='/' exact component={Home} />


       <Route path='/explore/foryou' component={Exploreforyou} />
       <Route path='/explore/covid' component={Explorecovid} />
       <Route path='/explore/trending' component={Exploretrending} />
       <Route path='/explore/news' component={Explorenews} />
       <Route path='/explore/sports' component={Exploresports} />
       <Route path='/explore/entreterimento' component={Exploreentreterimento} />



       <Route path='/notification' exact component={Notification} />
       <Route path='/notification/mentions' component={Mentions} />

       <Route path='/messages' component={Messages} />

       <Route path='/books' component={Books} />

       <Route path='/lists' component={Lists} />

       <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
