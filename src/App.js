import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./Components/HomePage";
import { LoginForm } from "./Components/Login/loginForm";
import { RegisterForm } from "./Components/Register/registerForm";
import { UserProfile } from "./Components/User/userProfile";
import { UserTable } from "./Components/User/userTable";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/users" element={<UserTable />} />
      </Routes>
    </div>
  );
}

export default App;
