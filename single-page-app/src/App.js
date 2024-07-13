import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import UsefulLinks from './components/UsefulLinks';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';

function App() {
  let name = "John"
  return (
    <BrowserRouter>
      <UsefulLinks />
      <Routes>
        <Route path="/" Component={Dashboard}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path='/about' element={<About username={name} />}></Route>
        <Route path="/blogs/*" Component={Blogs}></Route>
        <Route path="/contact" Component={ContactUs}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
