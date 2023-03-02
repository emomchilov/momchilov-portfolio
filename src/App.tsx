import { BrowserRouter, Routes } from 'react-router-dom';
import './App.scss'
import { ApplicationRoutes } from './routes/Routes';

export default function App() {
  return (
    <>
      <ApplicationRoutes></ApplicationRoutes>
    </>
  );
}