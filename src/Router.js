import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/web"} />} />
        <Route path="/web" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
