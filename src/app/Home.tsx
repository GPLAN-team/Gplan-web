import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "../features/inputGraphEditor/components/DashBoard";
import LoginPage from "../features/login/LoginPage";
import SignUpPage from "../features/login/SignUpPage";
import InputGraphEditorPage from "../features/inputGraphEditor/InputGraphEditorPage";

function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inputeditor" element={<InputGraphEditorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default Home;
