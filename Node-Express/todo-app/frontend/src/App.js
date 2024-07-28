import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import User from './components/User';
import Todo from './components/Todo';
import UserLogin from './components/UserLogin';
import Home from './components/Home';
import FileUpload from './components/FileUpload';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/login' Component={UserLogin}></Route>
        <Route path='/home' element={<PrivateRoute element={Home} />} />
        <Route path='/users' element={<PrivateRoute element={User} />} />
        <Route path='/todos' element={<PrivateRoute element={Todo} />} />
        <Route path='/formmanagement' element={<PrivateRoute element={FileUpload} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
