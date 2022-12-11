import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Burger from "./pages/Burger/Burger";
import HomeTemplate from "./Templates/HomeTemplate";
//Cấu hình react-router

//Cấu hình redux store
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Burger />}></Route>
            <Route path="burger" element={<Burger />}></Route>
            <Route path="*" element={<Navigate to="" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
