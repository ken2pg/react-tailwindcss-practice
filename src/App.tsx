import React, { useReducer, createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/signup/signIn";
import SignUp2 from "./components/signup/signUp2";

import { Redirect, Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  ACTIONTYPE,
  initialState,
  reducer,
  STORE,
} from "./duck/singup/reducer";

export const history = createBrowserHistory();

const AppContext = createContext(
  {} as { state: STORE; dispatch: React.Dispatch<ACTIONTYPE> }
);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mt-52 w-full flex justify-center">
      <AppContext.Provider value={{ state, dispatch }}>
        <Router history={history}>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp2 />
          </Route>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
