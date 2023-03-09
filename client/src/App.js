import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./pages/CreateAccount";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route index="/" element={<Login />} />
        <Route exact path="forget-password" element={<ForgetPassword />} />
        <Route exact path="create-account" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
