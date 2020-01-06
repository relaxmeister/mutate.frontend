import {
    JOBS_FETCH_SUCCESS,
    JOBS_FETCH_FAIL,
    FILTER_BY_FIELD,
    LOGIN_USER
} from './types';

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

export const addToShoppingList = () => {
    console.log("redux, addtoshoppinglist")
    return {
        type: LOGIN_USER,
    };
};

export const reduxAPIFetchJobs = () => {
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
            console.log("json: " + result);
            dispatch({ type: JOBS_FETCH_SUCCESS, payload: result });
            return result;
        }).catch(err => console.log("ejjoj: " + err));
    }
}

export const filterBySpecifics = (inparam) => (
    {
        type: FILTER_BY_FIELD,
        payload: inparam
    }
);