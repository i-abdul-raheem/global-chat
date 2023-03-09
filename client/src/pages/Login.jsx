import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsCheck } from "react-icons/bs";
import { FaLock, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToastMsg, setToastShow } from "../redux/utils";

export default function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [validForm, setValidForm] = useState({
    username: false,
    password: false,
  });
  const validateUsername = (username) => /^[a-z, A-Z, 0-9]+$/.test(username);
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setToastMsg("Login Clicked"));
    dispatch(setToastShow(true));
  };
  return (
    <div className="login">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.FloatingLabel className="mb-2 text-white">
            Username
          </Form.FloatingLabel>
          <InputGroup>
            <InputGroup.Text>
              <FaUser />
            </InputGroup.Text>
            <Form.Control
              type="text"
              value={form?.username}
              onChange={(e) => {
                setForm({ ...form, username: e.target.value });
                setValidForm({
                  ...validForm,
                  username:
                    e.target.value.length === 8 &&
                    validateUsername(e.target.value),
                });
              }}
              placeholder="Enter Username"
              autoComplete="arhexChatUsername"
              minLength={8}
              maxLength={8}
              id="loginUsername"
              required
            />
            {form.username.length > 0 && (
              <InputGroup.Text className="bg-white">
                {validForm.username ? (
                  <BsCheck className="text-success" />
                ) : (
                  <FaTimes className="text-danger" />
                )}
              </InputGroup.Text>
            )}
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.FloatingLabel className="mb-2 text-white">
            Password
          </Form.FloatingLabel>
          <InputGroup>
            <InputGroup.Text>
              <FaLock />
            </InputGroup.Text>
            <Form.Control
              type="password"
              value={form?.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
                setValidForm({
                  ...validForm,
                  password: e.target.value.length >= 8,
                });
              }}
              placeholder="Enter Password"
              autoComplete="arhexChatPassword"
              minLength={8}
              maxLength={16}
              id="loginPassword"
              required
            />
            {form.password.length > 0 && (
              <InputGroup.Text className="bg-white">
                {validForm.password ? (
                  <BsCheck className="text-success" />
                ) : (
                  <FaTimes className="text-danger" />
                )}
              </InputGroup.Text>
            )}
          </InputGroup>
        </Form.Group>
        <Button
          type="submit"
          disabled={Object.keys(validForm).some(function (k) {
            return validForm[k] === false;
          })}
          className="mt-1 mb-3 container fluid myBtnPrimary"
        >
          Login
        </Button>
        <div className="d-flex justify-content-between align-items-center">
          <Link
            className="text-white text-decoration-none mb-3 d-block"
            to={"/forget-password"}
          >
            Reset Password
          </Link>
          <Link
            className="text-white text-decoration-none mb-3 d-block"
            to={"/create-account"}
          >
            Create New Account
          </Link>
        </div>
      </Form>
    </div>
  );
}
