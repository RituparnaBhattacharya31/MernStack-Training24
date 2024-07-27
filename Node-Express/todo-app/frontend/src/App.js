import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import User from './components/User';
import Todo from './components/Todo';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/users' Component={User}></Route>
        <Route path='/todos' Component={Todo}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
