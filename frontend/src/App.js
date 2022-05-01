import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowForm from './components/ShowForm';
import CreateForm from './components/CreateForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={ <CreateForm/> } />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
