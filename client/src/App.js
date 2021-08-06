import React, { useState, useEffect, useContext, createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreatePost from "./pages/CreatePost";
import Notification from "./components/Notification";
// import { reducer, initalState } from "./reducers/userReducer"

// export const UserContext = createContext();

const Routing = () => {
  // const history = useHistory()
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Switch>
      {/* NOTIFICATION */}
      {open === true ? (
        <Notification message={text} close={handleClose} />
      ) : (
        <></>
      )}

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/login">
        <Login open={() => setOpen(true)} setText={(text) => setText(text)} />
      </Route>
      <Route path="/signup">
        <SignUp open={() => setOpen(true)} setText={(text) => setText(text)} />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
    </Switch>
  );
};

const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };
  
  // const [state, dispatch] = useReducer(reducer, initalState)

  return (
    // <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/login">
        <Login open={() => setOpen(true)} setText={(text) => setText(text)} />
      </Route>
      <Route path="/signup">
        <SignUp open={() => setOpen(true)} setText={(text) => setText(text)} />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
    </BrowserRouter>
    // </UserContext.Provider>
  );
};

export default App;
