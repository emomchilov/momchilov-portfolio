import { Route, Routes } from "react-router-dom";
import React from "react";
import { Tech } from "./Tech";
import { About } from "../components/About/about";

export function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/tech" element={<Tech />}></Route>
    </Routes>
  );
}
