import useCounter from './hooks/useCounter';

function Counter() {
    const {count, increment, decrement, reset, setValue} = useCounter();
    function resetInput(e) {
      e.target.value = "";
    }
    return (
        <div> 
            <h1>
              UseCounter Count
            </h1>
            <input type='number'  onChange={setValue} onBlur={resetInput}/>
            <h2>count : {count} </h2>
            <div> 
                <button onClick={increment}> 
                    Increase
                </button>
                <button onClick={decrement}> 
                    Decrease
                </button>
                <button onClick={reset}> 
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter;