// import "./App.css";

import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="app-shell">
      <Sidebar></Sidebar>
      {/* <Navbar /> */}
      <main className="app-main">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
