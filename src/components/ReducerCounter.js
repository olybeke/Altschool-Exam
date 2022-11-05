import React, { useReducer } from 'react';

function ReducerCounter() {
    function reducer(state, action) {
        switch(action.type) {
            case 'increase':
                return {count : state.count + 1};
            case 'decrease':
                return {count : state.count - 1};
            case 'reset':
                return {count : 0};
            case 'setValue':
                return { count : Number(action.payload) };
            default : 
                return state;
        }
    }

    function setValue(e) {
        dispatch({type : 'setValue', payload : e.target.value})
    }
    function resetInput(e) {
        e.target.value = "";
      }
   const [state, dispatch] = useReducer(reducer, {count : 0})


   return (
    <div> 
        <h1>
            useReducer Counter
        </h1>
        <h2>count : {state.count} </h2>
        <input type='number' onChange={setValue} onBlur={resetInput} />
            <div> 
                <button onClick={ () => dispatch({type : 'increase'})}> 
                    Increase
                </button>
                <button onClick={ () => dispatch({type : 'decrease'})}> 
                    Decrease
                </button>
                <button onClick={ () => dispatch({type : 'reset'})}> 
                    Reset
                </button>
            </div>
    </div>
   )
}
export default ReducerCounter;