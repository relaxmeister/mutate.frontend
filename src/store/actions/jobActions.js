import {
  JOBS_FETCH_SUCCESS,
  JOBS_FETCH_FAIL,
  JOBS_DELETE,
  JOBS_ADD,
  JOBS_MODIFY,
  LOGOUT_USER
} from "./types";

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

export const reduxAPIFetchJobs = () => {
  console.log("reduxAPIFetchJobs");
  return dispatch => {
    fetch("http://localhost:8080/", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*" //, Ändringen i backend "@CrossOrigin(origins="*")" fundamental
      }
    })
      .then(async response => {
        if (response.status >= 200 && response.status < 300) {
          console.log("REDUX YAO");
          return response.json();
        } else {
          console.log("something went wrong with GETJOBS");
        }
      })
      .then(result => {
        console.log("json: ", result);
        dispatch({ type: JOBS_FETCH_SUCCESS, payload: result });
        return result;
      })
      .catch(err => {
        console.log("ejjoj: ", err);
        dispatch({ type: JOBS_FETCH_FAIL });
      });
  };
};

export const deleteJob = (id, jwtToken) => {
  //API DELETE JOB
  return dispatch => {
    fetch(`http://localhost:8080/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${jwtToken}`,
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, Access-Control-Allow-Headers",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Expose-Headers": "Authorization",
        "Content-Type": "application/json"
      }
    })
      .then(async response => {
        console.log("SUCCESSFULLY DELETED");
        //setjobList(jobList.filter(e => e.id !== id))
        //window.location.reload(true);
        //return response.json(); finns ingen
      })
      .then(result => {
        console.log("json: ", result); // undefined, därför behövs inte denna del (iom void)
        dispatch({ type: JOBS_DELETE, payload: id });
      })
      .catch(err => {
        //this.setState({ loading: false, error: true });
        console.log("error:" + err);
      });
  };
};

export const addJob = (formData, jwtToken) => {
  return dispatch => {
    fetch("http://localhost:8080/applications", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Access-Control-Allow-Origin": "*", //, Ändringen i backend "@CrossOrigin(origins="*")" fundamental
        Accept: "application/json",
        Authorization: `Bearer ${jwtToken}`,
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, Access-Control-Allow-Headers",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Expose-Headers": "Authorization",
        "Content-Type": "application/json"
      }
    })
      .then(async response => {
        if (response.status >= 200 && response.status < 300) {
          // window.location.reload();
          //props.onFormChange(newFormData); // skickar vidare nollställningen
          console.log("CLEAR FORM");
          return response.json();
        } else if (response.status === 403) {
          //fungerande lösning om man vill åt en loggout vid felaktig auth/jwt
          //https://stackoverflow.com/questions/27726066/jwt-refresh-token-flow
          dispatch({ type: LOGOUT_USER });
        } else {
          var error = new Error(response.statusText || response.status);
          error.response = response;
          return Promise.reject(error);
        }
      })
      .then(json => {
        console.log(json);
        dispatch({ type: JOBS_ADD, payload: json });
        return json;
      })
      .catch(err => console.log(err));
  };
};

export const modifyJob = (formData, jobList, jwtToken) => {
  return dispatch => {
    fetch(`http://localhost:8080/applications/${formData.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Access-Control-Allow-Origin": "*", //, Ändringen i backend "@CrossOrigin(origins="*")" fundamental
        Authorization: `Bearer ${jwtToken}`,
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, Access-Control-Allow-Headers",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Expose-Headers": "Authorization",
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(async response => {
        if (response.status >= 200 && response.status < 300) {
          // window.location.reload();
          //props.onFormChange(newFormData); // skickar vidare nollställningen
          console.log("CLEAR FORM");
          return response.json();
        }
      })
      .then(json => {
        console.log(json);
        addOrModify(json, jobList, dispatch);
        return json;
      })
      .catch(err => console.log(err));
  };
};

const addOrModify = (item, list, dispatch) => {
  /**
   * The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
   */
  const found = list.some(el => el.id === item.id);
  if (!found) dispatch({ type: JOBS_ADD, payload: item });
  else dispatch({ type: JOBS_MODIFY, payload: item });
};
