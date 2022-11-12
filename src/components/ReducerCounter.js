import React, { useReducer } from 'react';
import {Helmet} from 'react-helmet-async';

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
    <> 
        <Helmet>
            <title>useReducer Counter section</title>
            <meta name='description' content='useReducer Counter section'/>
             <link rel="canonical" href="/components/ReducerCounter" />
        </Helmet>
        <section className='counter'>
          <button>useReducer Counter</button>
          <input type='number' placeholder='Input Value' onChange={setValue} onBlur={resetInput} />
         <h2>count : {state.count} </h2>
        </section>
               <section className="container_reset_increment_decrement">
                 <button className='btn-color-value' onClick={ () => dispatch({type : 'increase'})}>Increase</button>
                 <button onClick={ () => dispatch({type : 'decrease'})} className='btn-color-value'>Decrease</button>
                 <button onClick={ () => dispatch({type : 'reset'})} className='btn-color-value'> Reset</button>
               </section>
    </>
   )
}
export default ReducerCounter;