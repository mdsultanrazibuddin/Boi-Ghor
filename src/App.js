
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
     <h1>amr nam sultan razib uddin</h1>

     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="Reviews" element={<Reviews/>} />
     <Route path="DashBoard" element={<DashBoard/>} />
     <Route path="Blogs" element={<Blogs/>} />
     <Route path="about" element={<About/>} />
     </Routes>

    </div>
  );
}

export default App;
