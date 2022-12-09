import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Burger from "./pages/Burger/Burger";
import HomeTemplate from "./Templates/HomeTemplate";
//Cấu hình react-router

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate/>}>
          <Route index element={<Burger/>}></Route>
          <Route path="burger" element={<Burger/>}></Route>
          <Route path="*" element={<Navigate to=""/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
