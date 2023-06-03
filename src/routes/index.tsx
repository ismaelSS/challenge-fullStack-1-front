import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { Home } from "../pages/home";
import { NotFoundPage } from "../pages/404";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  )

}
