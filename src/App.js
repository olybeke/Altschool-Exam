import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import TestError from './components/TestError';
import ReducerCounter from './components/ReducerCounter';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import {Helmet} from 'react-helmet-async';

function App() {
  return (
    <ErrorBoundary>
      <Helmet>
       <title>Counter implementing useState Hook</title>
        <meta name='description' content='Counter App created using React Js.'/>
        <link rel="canonical" href="/App" />
      </Helmet>
    <div className="App">
       <nav> 
       <button><Link className='color_white' to="/">Counter</Link></button>
       <button><Link className='color_white' to="/reducerCounter">useReducer Counter</Link></button>
       <button><Link className='color_white' to="/error">TestError Boundary</Link></button>
        </nav>
       <Routes > 
          <Route path='/' element={<Counter />} />
          <Route path='/reducerCounter' element={<ReducerCounter />} />
          <Route path='/error' element={<TestError />} />
          <Route path='*' element={<NotFound />} />
       </Routes>
    </div>
    </ErrorBoundary>
  );
}
export default App;
