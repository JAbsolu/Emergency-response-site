import './App.css';
import '../src/landing-page/landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import LandingPage from './landing-page/Landing.js';
import DashboardPage from './dashboard/Dashboard';
import Home from './dashboard/components/Home'
import Layout from './dashboard/components/Layout'
import About from './dashboard/components/About';
import Contact from './dashboard/components/Contact';
import Login from './userAuthorization/login';
import Register from './userAuthorization/register';
import {  Route, Routes} from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/dashboard' element={<Layout />} />
      <Route path='/dashboard/home' element={<Home />} />
      <Route path='/dashboard/about' element={<About />} />
      <Route path='/dashboard/contact' element={<Contact />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  )
};

export default App;
