import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/signup/signIn";
import SignUp2 from "./components/signup/signUp2";

import { Redirect, Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="mt-52 w-full flex justify-center">
      {/* <SignIn /> */}
      <Router history={history}>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp2 />
        </Route>
      </Router>
    </div>
  );
}

export default App;
