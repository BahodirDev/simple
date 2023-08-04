import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './pages/home/MainHome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainHome />} />
      </Routes>
    </div>
  );
}

export default App;
