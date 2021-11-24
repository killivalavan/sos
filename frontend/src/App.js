import GlobalStyle from "./Components/GlobalStyle";
import HomePage from "./Components/Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import FormPage from "./Components/Pages/FormPage";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path={["/Form", "/"]}>
          <FormPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
