import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/Actions/CounterActions';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch()
    
    const handleClick = (work) => {
        if (work === "inc") {
            dispatch(incrementCounter())
        }
        if (work === "dec") {
            dispatch(decrementCounter())
        }
        if (work === 'reset') {
            dispatch(resetCounter())
        }
    }
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: { count }</h3>
            <button onClick={()=>handleClick('inc')}>Increment</button>
            <button onClick={()=>handleClick('dec')}>Decrement</button>
            <button onClick={()=>handleClick('reset')}>Rest</button>
        </div>
    );
};

export default Counter;