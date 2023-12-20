import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "../features/dashboard/components/DashBoard";
import LoginPage from "../features/login/LoginPage";
import SignUpPage from "../features/login/SignUpPage";

function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default Home;
