import { useState } from "react";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div
      className={`app-shell${isSidebarCollapsed ? " sidebar-collapsed" : ""}`}
    >
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
      />
      {/* <Navbar /> */}
      <main className="app-main">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
