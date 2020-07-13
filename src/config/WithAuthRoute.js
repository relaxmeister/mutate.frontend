import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const WithAuthRoute = ({ children, ...rest }) => {
  console.log(rest);
  console.log(rest.auth);
  console.log("LStorage", localStorage.getItem("user"));
  //console.log("LStorageJSON", JSON.parse(localStorage.getItem("user").claims));
  //lägger nu in localstorage in i redux
  //var user =  JSON.parse(localStorage.getItem("user"));
  //console.log("user", user);
  //console.log("stclaims", user.claims)


  return (
    <Route
      {...rest}
      render={({ location }) =>
        rest.auth.user && rest.auth.user.claims === rest.acceptClaims ? (
        //om attribut user.claims inte finns kommer den bugga ur och ingenting händer
        //svar det som händer är att den skickar en till login men iom inloggad redirectas man till recruit
        //oklart vad som är optimalt
        //user && user.claims && user.claims === rest.acceptClaims ? (
        //*rest.auth.user.claims ===*/ rest.acceptClaims ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(WithAuthRoute);

// const mapStateToProps = ({ auth }) => {
//   const { user, error, loading } = auth;
//   return {  user, error, loading };
// };

/*

export default connect(mapStateToProps, {
  logoutUser
})(Header);


export default WithAuthRoute;
*/
