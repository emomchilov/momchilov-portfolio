import { Routes, Route } from "react-router-dom";
import { About } from "../Components/About/About";
import { Tech } from "./Tech";

export function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/tech" element={<Tech />}></Route>
    </Routes>
  );
}
