import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './pages/home/MainHome';
import Simple from './pages/simple/Simple';
import Navbar from './pages/navbar/Navbar';
import Dashboard from './pages/simpleDashboard/Dashboard';
import Admin from './pages/admin/Admin';
import Super from './pages/super-admin/Super';
import SimProtected from './pages/simple-protected/SimProtected';
import SimSalled from './pages/sim-salled/SimSalled';
import SimLocatinon from './pages/sim-location/SimLocatinon';
import SimUnconnect from './pages/sim-unconnect/SimUnconnect';
import SimRefused from './pages/sim-refused/SimRefused';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/simple' element={<SimProtected/>}>
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
