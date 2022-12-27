import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./services/Reducer/CounterReducer";



const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;