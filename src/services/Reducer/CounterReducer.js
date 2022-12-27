import { combineReducers } from "redux";
import { DECREMENT, GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, INCREMENT, RESET } from "../Constant/CounterConstant";

const initialCounter = {
    count:0
}

const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

const counterReducer = (state=initialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count+1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count-1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
    
        default:
           return state;
    }
}

const todoReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
        error: null
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
          isLoading: false,
        todos:[],
        error: action.payload,
      };
    default:
      return state;
  }
};


// combining reducers

const rootReducer = combineReducers({
    countR: counterReducer,
    todosR:todoReducer
    
})
export default rootReducer;