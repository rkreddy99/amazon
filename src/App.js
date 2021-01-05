import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HTkZ1KgHXTTP3KyIizaKmwLbhRjPzZMDmAkkYefLxnriCXAyrFo3AMEyDi0bWgcOFWVT35ekwMFyXTIBWd6JK7p00dj1zGrxC"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run only once when the app component loads...
    // if we keep something in the array after this block, this will run everytime that object changes in the list
    // we can put user in that list
    // like a dynamic if statement

    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //  the user is not logged
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
