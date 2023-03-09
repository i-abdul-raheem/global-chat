import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login Clicked", form);
  };
  return (
    <div className="login">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.FloatingLabel className="mb-2 text-white">
            Username
          </Form.FloatingLabel>
          <Form.Control
            type="text"
            value={form?.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            placeholder="Enter Username"
            autoComplete="arhexChatUsername"
            maxLength={8}
            id="loginUsername"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.FloatingLabel className="mb-2 text-white">
            Password
          </Form.FloatingLabel>
          <Form.Control
            type="password"
            value={form?.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter Password"
            autoComplete="arhexChatPassword"
            maxLength={16}
            id="loginPassword"
            required
          />
        </Form.Group>
        <Button
          type="submit"
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
