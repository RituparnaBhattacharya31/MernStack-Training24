import React from 'react';

function withAuth(Component) {
  return function WrappedComponent(props) {
    // const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    console.log(props)
    if (props.isLoggedIn === false) {
      return "You are not logged in";
    }
    return <Component {...props} />;
  };
}

export default withAuth;
