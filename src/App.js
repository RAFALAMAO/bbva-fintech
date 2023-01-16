import { Routes, Route } from "react-router-dom";

// Components
import Home from "./views/home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AdminDash from "./components/AdminDash/AdminDash";
import CustomerDash from "./components/CustomerDash/CustomerDash";

// Styles
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin-dash" element={<AdminDash/>}/>
        <Route path="/customer-dash" element={<CustomerDash/>}/>
      </Routes>
    </div>
  );
}

export default App;
