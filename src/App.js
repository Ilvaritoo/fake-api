import Users from "./components/Users";
import { Switch, Route } from 'react-router-dom';
import User from "./components/User";
import Header from "./components/Header";


function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Users />
        </Route>
        <Route path='/user/:id'>
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
