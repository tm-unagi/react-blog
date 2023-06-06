import './App.css';
import {} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useState } from 'react';
import ConfirmDelete from './components/ConfirmDelete';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />}></Route>
        <Route path="/confirmdelete/:id" element={<ConfirmDelete isAuth={isAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
