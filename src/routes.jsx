import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/Main";
import { About } from "./pages/about/About";
import { UserInfoPage } from "./pages/userInfo/UserInfo";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<UserInfoPage />} />
      <Route path="/" exact element={<MainPage />} />
    </Routes>
  );
}
