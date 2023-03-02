import { Route, Routes } from "react-router-dom";
import { About } from "../components/About/About";

export function ApplicationRoutes() {
    return (
    <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path='/tech' element={<About />}></Route>
     </Routes>
    )
}