import { Route, Routes } from "react-router-dom";
import { About } from "../components/About/About";
import { Tech } from "./Tech";

export function ApplicationRoutes() {
    return (
    <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path='/tech' element={<Tech />}></Route>
     </Routes>
    )
}