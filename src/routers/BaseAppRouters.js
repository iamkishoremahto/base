import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from  "../components/Login/Login"
import { Dashboard } from "../components/Dashboard/Dashboard";

export const BaseAppRouters = () =>{
    return (
        <BrowserRouter>
        <Routes>
        {/* <Route path = '/' element = { <Login /> } /> */}
        <Route path = '/' element = { <Dashboard /> } />
        </Routes>
        </BrowserRouter>
    )
};