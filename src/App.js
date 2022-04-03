
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import DashBoard from './Components/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
     <Header/>

     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="Reviews" element={<Reviews/>} />
     <Route path="DashBoard" element={<DashBoard/>} />
     <Route path="Blogs" element={<Blogs/>} />
     <Route path="about" element={<About/>} />
     <Route path="*" element={<NotFound/>} />
     </Routes>

    </div>
  );
}

export default App;
