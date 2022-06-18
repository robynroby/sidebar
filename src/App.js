import './App.css';
import Home from './Components/Home/Home';
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Link
// } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Tenants from './Components/Tenants/Tenants';


function App() {
  return (
        <div className="App">
          <Sidebar />
          <div className="content">
            <Home />
            <Tenants />
          </div>
        </div>
  );
}

export default App;
