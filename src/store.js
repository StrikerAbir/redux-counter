import { createStore } from "redux";
import counterReducer from "./services/Reducer/CounterReducer";

const store = createStore(counterReducer)
export default store;