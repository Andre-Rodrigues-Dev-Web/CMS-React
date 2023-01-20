import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const App = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={dashboard} />
    </Router>
  );
};
