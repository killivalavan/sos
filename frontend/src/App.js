import GlobalStyle from "./Components/GlobalStyle";
import HomePage from "./Components/Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/Pages/About";
import Posts from "./Components/Pages/Posts";
import PostDetails from "./Components/Pages/PostDetails";
import FormData from "./Components/Pages/FormPage";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path={["/posts", "/posts/:id"]}>
          <Posts />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
