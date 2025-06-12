import React from 'react';
// import './styles/index.css';
import './styles/mystyle.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contacts from "./pages/Contacts";
import News from './pages/News';
import Registration from './pages/Registration';
import OnlineArchive from "./pages/OnlineArchive";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BrowserRouter} from 'react-router-dom';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/archive" element={<OnlineArchive />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}
// export default function App() {
//   return (
//     <BrowserRouter>
//       <nav className="nav">
//         <Link to="/">Головна</Link>
//         <Link to="/news">Новини</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/news" element={<News />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }