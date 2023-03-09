import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function ForgetPassword() {
  const [form, setForm] = useState({
    username: "",
  });
  const handleForgetPassword = async (e) => {
    e.preventDefault();
    console.log("Forget Password Clicked", form);
  };
  return (
    <div>
      <Form onSubmit={handleForgetPassword}>
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
            id="forgetPasswordUsername"
            required
          />
        </Form.Group>
        <Button type="submit" className="mt-1 container fluid myBtnPrimary">
          Send Reset Link
        </Button>
        <Link className="text-white text-decoration-none mt-3 d-block" to={"/"}>
          <AiOutlineArrowLeft /> Back to login
        </Link>
      </Form>
    </div>
  );
}
