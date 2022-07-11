import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Tenants from './Components/Tenants/Tenants';
import Profile from './Components/Profile/Profile';


function App() {
  return (
    <Router>
        <div className="App">
          <Sidebar />
          <div className="content">
            <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/tenants' element={ <Tenants /> }></Route>
            <Route exact path='/account' element={ <Profile /> }></Route>
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
