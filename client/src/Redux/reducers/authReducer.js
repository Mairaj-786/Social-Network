import { constaintsTyps } from "../constant/types";


const initState = {
    loading: false,
    loginErrors: '',
    token: ''

}
const getToken = localStorage.getItem('token');
if (getToken) {
    initState.token = getToken
}
const authReducer = (state = initState, action) => {
    if (action.type === constaintsTyps.LOGIN_FAIL) {
        return {
            ...state,
            loginErrors: action.payload
        }
    }
    else if (action.type === constaintsTyps.SET_LOADING) {
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === constaintsTyps.CLOSE_LOADING) {
        return {
            ...state,
            loading: false
        }
    }
    else if (action.type === constaintsTyps.SET_TOKEN) {
        return {
            ...state,
            token: action.payload
        }
    }
    return state;
}

export default authReducer;
