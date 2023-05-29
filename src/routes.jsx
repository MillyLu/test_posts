import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { AboutPage } from "./pages/About";
import { UserInfoPage } from "./pages/UserInfo";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/user/:id" element={<UserInfoPage />}/>
        </Routes>
    )
}
