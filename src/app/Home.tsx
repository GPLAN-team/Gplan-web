import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "../features/inputGraphEditor/components/DashBoard";
import LoginPage from "../features/login/LoginPage";
import SignUpPage from "../features/login/SignUpPage";
import Sidebar from "../features/inputGraphEditor/components/Sidebar";

function Home() {
  return (
    <div style={{backgroundColor: '#1C4C8233'}}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
