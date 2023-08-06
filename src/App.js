import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './pages/home/MainHome';
import Navbar from './pages/navbar/Navbar';
import Admin from './pages/admin/Admin';

import Dashboard from './pages/simplePages/simpleDashboard/Dashboard';
import { useEffect } from 'react';
import SimProtected from './pages/simplePages/simple-protected/SimProtected';
import SimSalled from './pages/simplePages/sim-salled/SimSalled';
import SimLocatinon from './pages/simplePages/sim-location/SimLocatinon';
import SimRefused from './pages/simplePages/sim-refused/SimRefused';
import SimUnconnect from './pages/simplePages/sim-unconnect/SimUnconnect';
import Super from './pages/super-admin/Super';
import Simple from './pages/simplePages/simple/Simple';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/simple' element={<SimProtected />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='selled' element={<SimSalled />} />
          <Route path='location' element={<SimLocatinon />} />
          <Route path='unconnect' element={<SimUnconnect />} />
          <Route path='refuse' element={<SimRefused />} />
        </Route>
        <Route path='/simple-log' element={<Simple />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/super-admin-log' element={<Super />} />
      </Routes>
    </div>
  );
}

export default App;
