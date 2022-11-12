import { useState } from 'react';
import {Helmet} from 'react-helmet-async';

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
        <Helmet>
            <title>useReducer Counter section</title>
            <meta name='description' content='useReducer Counter section'/>
            <link rel="canonical" href="/components/TestError" />
          </Helmet>
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