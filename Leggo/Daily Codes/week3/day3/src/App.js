import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact';
import Blue from './component/Blue';
import Red from './component/Red';

import './App.css';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About />}>
        {/* nested loops that define what is returned in the <Outlet/> of <About/> */}
        {/* path /about/blue */}
        <Route path='blue' element={<Blue />} />
        {/* path /about/red */}
        <Route path='red' element={<Red />} />
      </Route>
      {/* :username&:title&:color create the keys in the params object that we get returned by useParam in <Contact/> */}
      <Route path='/contact/:username&:title&:color' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
