import './App.css';
import Resume from './screens/Resume';
import ResumeScreen from './screens/ResumeScreen';
import Header from './screens/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
 
function App() {
  return (
    <Router>

   
    <div className="app">
        <Switch>
          
          <Route path="/resume">
            {/* <p>How are your</p> */}
            <Header/>
            <ResumeScreen />
          
          </Route>

          <Route path="/">
            <Header />
            <Resume />
          </Route>

         
      </Switch>
      </div>
    </Router>
  );
}

export default App;
