import GlobalStyle from "./Components/GlobalStyle";
import HomePage from "./Components/Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/Pages/About";
import Posts from "./Components/Pages/Posts";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/Posts'>
          <Posts />
        </Route>
        <Route path='/About'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
