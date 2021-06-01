import axios from 'axios';
import validation from '../../utils/validation';
import { constaintsTyps } from '../constant/types';


export const loginAction = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const check = validation(state);
        if (check.errLength > 0)
            console.log(check)
        dispatch({ type: constaintsTyps.SET_LOADING })
        try {
            const { data } = await axios.post('http://127.0.0.1:5000/api/login', state, config)
            localStorage.setItem('token', data.token)
            dispatch({ type: constaintsTyps.SET_TOKEN, payload: data.token })
            dispatch({ type: constaintsTyps.CLOSE_LOADING })
        } catch (error) {
            dispatch({ type: constaintsTyps.LOGIN_FAIL, payload: error.response.data })
            dispatch({ type: constaintsTyps.CLOSE_LOADING })
            console.log(error.response)

        }
    }
}