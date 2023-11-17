
import './index.css'
import Dashboard from './Component/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserManage from './Component/UserManage';
import AccountCreate from './Component/AccountCreate';
import Home from './Component/Home';

function App() {
  return (
    <Router>
      <Home/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/usermanage' element={<UserManage/>}/>
        <Route path='/createaccount' element={<AccountCreate/>}/>
      </Routes>
    </Router>
  );
}

export default App;
