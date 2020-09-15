import {
  JOBS_FETCH_SUCCESS,
  JOBS_FETCH_FAIL,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGOUT_USER
} from "./types";

export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });
  }
};

export const loginUser = (data/* email, password*/ ) => {

  /*return dispatch => {
    console.log("LOLASDOASLDOL");
    dispatch({ type: LOGIN_USER });

    fetch(`http://localhost:8080/login?email=${email}&password=${password}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(async response => {
        if (response.status >= 200 && response.status < 300) {
          console.log("REDUX LOGIN");
          return response.json();
        }
      })
      .then(result => {
        console.log("LOGIN", result);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: result }); // verkar köra den oavsett 404
      })
      .catch(err => {
        console.log("err", err);
        dispatch({ type: LOGIN_USER_FAIL });
      });
  };*/
  return dispatch => {
    console.log("LOLASDOASLDOL");
    dispatch({ type: LOGIN_USER });

    fetch("http://localhost:8080/authenticate", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        //"Authorization": `Bearer: ${"HEJ"}`
      }
    })
      .then(async response => {
        if (response.status >= 200 && response.status < 300) {
          console.log("REDUX LOGIN");
          return response.json();
        } else {
          var error = new Error(response.statusText || response.status)
          error.response = response
          return Promise.reject(error)
        }
      })
      .then(result => {
        console.log("LOGIN", result);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: result }); // verkar köra den oavsett 404
      })
      .catch(err => {
        console.log("err", err);
        dispatch({ type: LOGIN_USER_FAIL });
      });
  };
};

export const registerUser = data => {
  console.log("GOGOG!!!");
  console.log("data", data);

  return dispatch => {
    console.log("LOLASDOASLDOL");
    dispatch({ type: REGISTER_USER });

    fetch("http://localhost:8080/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(async response => {
        if (response.status >= 200 && response.status < 300) {
          console.log("REDUX LOGIN");
          return response.json();
        }
      })
      .then(result => {
        console.log("REGISTER", result);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: result });
      })
      .catch(err => {
        console.log("err", err);
        dispatch({ type: REGISTER_USER_FAIL });
      });
  };
};
