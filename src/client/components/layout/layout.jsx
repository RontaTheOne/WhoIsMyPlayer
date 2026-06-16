import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

export default function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="content-wrapper">
        <Header />

        <main className="content p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}