import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/signup/signIn";
import SignUp2 from "./components/signup/signUp2";

import { Redirect, Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

type STORE = {
  Email: string;
  password: string;
  userId: string;
  userName: string;
};

type ACTIONTYPE =
  | {
      type: "signup";
      payload: {
        Email: string;
        password: string;
        userName: string;
      };
    }
  | { type: "signin" };

const initialState: STORE = {
  Email: "",
  password: "",
  userId: "",
  userName: "",
};

const reducer = (state: STORE, action: ACTIONTYPE) => {
  switch (action.type) {
    case "signup":
      return {
        Email: action.payload.Email,
        password: action.payload.password,
        userId: state.userId,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
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
