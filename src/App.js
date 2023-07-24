import { Routes, Route } from "react-router-dom";

// Components
import Home from "./views/home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AdminDash from "./components/AdminDash/AdminDash";
import CustomerDash from "./components/CustomerDash/CustomerDash";

// Styles
import "./App.css";

// Config
import { GH_PAGES_ROUTE } from "./config/globals";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={`${GH_PAGES_ROUTE}`} element={<Home/>}/>
        <Route path={`${GH_PAGES_ROUTE}/login`} element={<Login/>}/>
        <Route path={`${GH_PAGES_ROUTE}/register`} element={<Register/>}/>
        <Route path={`${GH_PAGES_ROUTE}/admin-dash`} element={<AdminDash/>}/>
        <Route path={`${GH_PAGES_ROUTE}/customer-dash`} element={<CustomerDash/>}/>
      </Routes>
    </div>
  );
}

export default App;
