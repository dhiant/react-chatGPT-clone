import "./normal.css";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginForm from "./components/login/LoginForm";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="auth/login" />;
  };

  return (
    <div className="App">
      <Routes>
        <Route
          index
          exact
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route exact path="auth/login" element={<Login />} />
        <Route exact path="login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
