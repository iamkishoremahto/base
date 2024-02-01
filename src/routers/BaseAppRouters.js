import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from  "../components/Login/Login"
import { Dashboard } from "../components/Dashboard/Dashboard";
import Protected from "./Protected";

export const BaseAppRouters = () =>{
    return (
        <BrowserRouter>
        <Routes>
        <Route path = '/' element = { <Login /> } />
        <Route path = '/dashboard' element = {<Protected Component = {Dashboard}/>} />
        <Route path = '*' element = { <Login /> }  />
        </Routes>
        </BrowserRouter>
    )
};