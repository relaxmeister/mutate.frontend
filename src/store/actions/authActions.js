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
}

// export const employeeCreate = ({ name, phone, shift }) => {
//     console.log(name, phone, shift);
//     const { currentUser } = firebase.auth();

//     return (dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/employees`)
//             .push({ name, phone, shift })
//             .then(() => {
//                 dispatch({ type: EMPLOYEE_CREATE });
//                 Actions.pop();
//             });
//     };
// };

export const loginUser = ( email, password ) => {
  // return (dispatch) => {
  //     dispatch({ type: LOGIN_USER });

  //     firebase.auth().signInWithEmailAndPassword(email, password)
  //         .then(user => loginUserSuccess(dispatch, user))
  //         .catch(() => {
  //             firebase.auth().createUserWithEmailAndPassword(email, password)
  //             .then(user => loginUserSuccess(dispatch, user))
  //             .catch(() => loginUserFail(dispatch));
  //         });
  // };
  console.log("GOGOG!!!");
  //console.log("data", data);

  return dispatch => {
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
        dispatch({ type: LOGIN_USER_SUCCESS, payload: result });
      })
      .catch(err => {
        console.log("err", err);
        dispatch({ type: LOGIN_USER_FAIL });
      });
  };
};

export const registerUser = data => {
  // return (dispatch) => {
  //     dispatch({ type: LOGIN_USER });

  //     firebase.auth().signInWithEmailAndPassword(email, password)
  //         .then(user => loginUserSuccess(dispatch, user))
  //         .catch(() => {
  //             firebase.auth().createUserWithEmailAndPassword(email, password)
  //             .then(user => loginUserSuccess(dispatch, user))
  //             .catch(() => loginUserFail(dispatch));
  //         });
  // };
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

/**
 * export const reduxAPIFetchJobs = () => {
    console.log("reduxAPIFetchJobs")
    return (dispatch) => {
        fetch("http://localhost:8080/", {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*' //, Ändringen i backend "@CrossOrigin(origins="*")" fundamental
            }
        }).then(async response => {
            if (response.status >= 200 && response.status < 300) {
                console.log("REDUX YAO")
                return response.json();
            } else {
                console.log("something went wrong with GETJOBS");
            }
        }).then(result => {
            console.log("json: ", result);
            dispatch({ type: JOBS_FETCH_SUCCESS, payload: result });
            return result;
        }).catch(err => console.log("ejjoj: ", err));
    }
}
 * 
 * 
 */
