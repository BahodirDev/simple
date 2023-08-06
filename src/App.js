import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './pages/home/MainHome';
import Simple from './pages/simplePages/simple/Simple';
import Navbar from './pages/navbar/Navbar';
import Dashboard from './pages/simplePages/simpleDashboard/Dashboard';
import Admin from './pages/adminPages/admin/Admin';
import Super from './pages/super-admin/Super';
import SimProtected from './pages/simplePages/simple-protected/SimProtected';
import SimSalled from './pages/simplePages/sim-salled/SimSalled';
import SimLocatinon from './pages/simplePages/sim-location/SimLocatinon';
import SimUnconnect from './pages/simplePages/sim-unconnect/SimUnconnect';
import SimRefused from './pages/simplePages/sim-refused/SimRefused';
import AdminDashboard from './pages/adminPages/admindashboard/AdminDashboard';
import AdminProtected from './pages/adminPages/admin-protected/AdminProtected';
import AdminDedline from './pages/adminPages/admin-dedline/AdminDedline';
import AdminSimple from './pages/adminPages/admin-simple/AdminSimple';
import AdminRufused from './pages/adminPages/admin-rufused/AdminRufused';
import DailySales from './pages/adminPages/admin-dailysales/DailySales';

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
        <Route path='/admin' element={<AdminProtected/>}>
            <Route path='simple' element={<AdminSimple/>}/>
            <Route path='dedline' element={<AdminDedline/>}/>
            <Route path='day' element={<DailySales/>}/>
            <Route path='rufused' element={<AdminRufused/>}/>
        </Route>
        <Route path='/admin-log' element={<Admin />} />
        <Route path='/simple-log' element={<Simple />} />
        <Route path='/super-admin-log' element={<Super />} />
      </Routes>
    </div>
  );
}

export default App;
