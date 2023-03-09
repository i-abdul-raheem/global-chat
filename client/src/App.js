import "bootstrap/dist/css/bootstrap.min.css";
import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./pages/CreateAccount";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import { setToastShow } from "./redux/utils";

function App() {
  const { toastShow, toastMsg } = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App container">
        <Routes>
          <Route index="/" element={<Login />} />
          <Route exact path="forget-password" element={<ForgetPassword />} />
          <Route exact path="create-account" element={<CreateAccount />} />
        </Routes>
      </div>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => dispatch(setToastShow(false))}
          show={toastShow}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>{toastMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default App;
