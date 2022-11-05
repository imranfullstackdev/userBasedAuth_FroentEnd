import logo from "./logo.svg";
import "./App.css";
import AddEmployee from "./Component/AddEmployee";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import View from "./Component/View";
import Edit from "./Component/Edit";
import Header from "./Component/Header";
import User from "./Component/User";
import LogOut from "./Component/LogOut";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/View" element={<View />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/User" element={<User />} />
          <Route path="/LogOut" element={<LogOut />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
