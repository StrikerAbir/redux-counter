import { API_URL, DECREMENT, GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, INCREMENT, RESET } from "../Constant/CounterConstant"
import axios from "axios";

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
export const resetCounter = () => {
    return {
        type: RESET
    }
}



// async action
export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST })
    
    try {
            const res = await axios.get(API_URL, {
              headers: { "Accept-Encoding": "gzip,deflate,compress" },
            });
            dispatch({type: GET_TODOS_SUCCESS,payload:res.data})
        } catch (error) {
            dispatch({ type: GET_TODOS_FAILED, payload: error.message });
        }
}