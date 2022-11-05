import { useState } from 'react';

function useCounter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prev => prev + 1)
    }
    function decrement() {
        setCount(prev => prev - 1)
    }
    function reset() {
        setCount(0)
    }
    function setValue(e) {
        let num = Number(e.target.value);
        setCount(num)
    }
    return {count, increment, decrement, reset, setValue};
}
export default useCounter;