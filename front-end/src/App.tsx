import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login/Login";
import RoomManager from "./components/Room/RoomManager";
import {   Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RoomManager/>} />
        <Route path="/RoomManager" element={<RoomManager/>} />
      </Routes>
    </div>
  );
}

export default App;
