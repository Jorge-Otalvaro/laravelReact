import logo from './logo.svg';
import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowForm from './components/ShowForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        	<Route path='' element={ <ShowForm/> } />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
