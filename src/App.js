import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './Pages/AddBlog/AddBlog';
import Blogs from './Pages/Blogs/Blogs';
import BlogDetail from './Pages/Home/BlogDetail/BlogDetail';
import Home from './Pages/Home/Home';
import Publish from './Pages/Home/Publish/Publish';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog/:blogId' element={<BlogDetail></BlogDetail>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/publish' element={<Publish></Publish>}></Route>
        <Route path='/addblog' element={<AddBlog></AddBlog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
