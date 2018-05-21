import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const issueReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ISSUES": {
            return {
                ...state,
                loading: false,
                data: action.issues
            }
        }
        case "GET_ISSUE": {
            return {
                ...state,
                loading: false,
                currentIssue: action.issue
            }
        }
        case "ADD_ISSUE": {
            return {
                ...state,
                loading: false,
                data: [...state.data, action.issue]
            }
        }
        case "REMOVE_ISSUE":
            return {
                ...state,
                loading: false,
                data: state.data.filter(issue => issue._id !== action.id)
            }
        case "EDIT_ISSUE":
            return {
                ...state,
                loading: false,
                data: state.data.map(issue => {
                    if (issue._id === action.id) {
                        return action.issue;
                    } else {
                        return issue;
                    }
                })
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }

        default:
            return state;
    }
}

export const getIssues = () => {
    return dispatch => {
        axios.get("/issues")
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "GET_ISSUES",
                    issues: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const getIssue = (id) => {
    return dispatch => {
        axios.get("/issues/" + id)
            .then(response => {
                dispatch({
                    type: "GET_ISSUE",
                    issues: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const addIssue = (newIssue) => {
    return dispatch => {
        axios.post("/issues/", newIssue)
            .then(response => {
                dispatch({
                    type: "ADD_ISSUE",
                    issue: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const removeIssue = (id) => {
    return dispatch => {
        axios.delete("/issues/" + id)
            .then(response => {
                dispatch({
                    type: "REMOVE_ISSUE",
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const editIssue = (id, newIssue) => {
    return dispatch => {
        axios.put("/issues/" + id, newIssue)
            .then(response => {
                console.log(newIssue);
                dispatch({
                    type: "EDIT_ISSUE",
                    issue: response.data,
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export default issueReducer; 
