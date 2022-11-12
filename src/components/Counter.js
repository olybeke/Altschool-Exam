import useCounter from './hooks/useCounter';
import {Helmet} from 'react-helmet-async';

function Counter() {
    const {count, increment, decrement, reset, setValue} = useCounter();
    function resetInput(e) {
      e.target.value = "";
    }
    return (
        <>
          <Helmet>
            <title>useReducer Counter section</title>
            <meta name='description' content='useReducer Counter section'/>
          <link rel="canonical" href="/components/Counter" />
          </Helmet>
            <section className='counter'>
              <button>UseCounter Count</button>
              <input type='number' placeholder="Input Value" onChange={setValue} onBlur={resetInput}/>
              <h2>count : {count} </h2>
            </section>
                <section className="container_reset_increment_decrement">
                 <button className='btn-color-value' onClick={increment}> Increase</button>
                 <button className='btn-color-value' onClick={decrement}> Decrease</button>
                 <button className='btn-color-value' onClick={reset}> Reset</button>
                </section>   
          </>
    )
}

export default Counter;