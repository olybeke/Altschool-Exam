import { useState } from 'react';

function TestError() {
    const [errorCount, setErrorCount] = useState(0);
    function increment() {
        setErrorCount(prev => prev + 1)
    }
    if(errorCount >= 3) {
        throw new Error('ErrorCount is greater than three')
    }
    return (
        <div>
            <p>
               To test ErrorBoundary increase ErrorCount to be equal to 3
             </p>
            <h2> 
                ErrorCount : {errorCount}
            </h2>
            <button onClick={increment}> 
                Increase
            </button>       
        </div>
    )
}
export default TestError;