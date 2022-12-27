import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/Actions/CounterActions';

const Todos = () => {
    const dispatch = useDispatch();
    const {todos,isLoading,error }= useSelector(state => state.todosR)
    useEffect(() => {
        dispatch(getAllTodos())
    },[])
    
    return (
      <div>
        <h2>Todos App</h2>
        {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <section>
                {todos && todos.map(todo => <article key={todo.id}>
                    <h4>{todo.title}</h4>
                </article>)}
           </section>
      </div>
    );
};

export default Todos;