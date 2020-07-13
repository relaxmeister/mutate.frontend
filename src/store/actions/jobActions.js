import {
  JOBS_FETCH_SUCCESS,
  JOBS_FETCH_FAIL,
  JOBS_DELETE,
  JOBS_ADD,
  JOBS_MODIFY,
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
      .catch(err => console.log("ejjoj: ", err));
  };
};

export const deleteJob = id => {
  //API DELETE JOB
  return dispatch => {
    fetch(`http://localhost:8080/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*"
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

export const addJob = formData => {
  return dispatch => {
    fetch("http://localhost:8080/applications", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Access-Control-Allow-Origin": "*", //, Ändringen i backend "@CrossOrigin(origins="*")" fundamental
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
        dispatch({ type: JOBS_ADD, payload: json });
        return json;
      })
      .catch(err => console.log(err));
  };
};

export const modifyJob = (formData, jobList) => {
  return dispatch => {
    fetch(`http://localhost:8080/applications/${formData.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Access-Control-Allow-Origin": "*", //, Ändringen i backend "@CrossOrigin(origins="*")" fundamental
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
        addOrModify(json, jobList, dispatch)
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
}