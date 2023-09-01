import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import WatchListPage from './pages/WatchListPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Dashboard' element={<DashboardPage/>}/>
            <Route path='/Coin/:id' element={<CoinPage/>}/>
            <Route path='/Compare' element={<ComparePage/>}/>
            <Route path='/Watchlist' element={<WatchListPage/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
