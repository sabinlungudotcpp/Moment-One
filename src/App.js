import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import MomentApp from "./components/MomentApp";
import Login from "./components/loginRegisterComponents/login";
import Register from "./components/loginRegisterComponents/register";
/**
 * @fileoverview: The main App component that returns JSX which renders routes that users are able to take within the web app, i.e navigation between links
 * @author: Sabin Constantin Lungu, Ryan Spowart
 * @param: N/A
 * @component App() - Returns JSX
 * @requires: npm install react-router-dom
 */

const App = () => { // Main App Component

  return (

    <Router>
      <Switch>
          <Route path = "/" exact component = {Login}/>
          <Route path = "/register" exact component ={Register}/>
          <Route path ="/app" component ={MomentApp}/>
      </Switch>
    </Router>

  )
}

export default App;