import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import TestError from './components/TestError';
import ReducerCounter from './components/ReducerCounter';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
       <nav> 
        <Link to="/">Counter</Link>
        <Link to="/reducerCounter">useReducer Counter</Link>
        <Link to="/error">TestError Boundary</Link>
        </nav>
       <Routes > 
          <Route path='/' element={<Counter />} />
          <Route path='/reducerCounter' element={<ReducerCounter />} />
          <Route path='/error' element={<TestError />} />
          <Route path='*' element={<NotFound />} />
       </Routes>
    </div>
  );
}
export default App;
