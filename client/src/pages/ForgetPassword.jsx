import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaTimes, FaUser } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setToastMsg, setToastShow } from "../redux/utils";

export default function ForgetPassword() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
  });
  const [validForm, setValidForm] = useState({
    username: false,
  });
  const validateUsername = (username) => /^[a-z, A-Z, 0-9]+$/.test(username);
  const handleForgetPassword = async (e) => {
    e.preventDefault();
    dispatch(setToastMsg("Forget Password Clicked"));
    dispatch(setToastShow(true));
  };
  return (
    <div>
      <Form onSubmit={handleForgetPassword}>
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
              id="forgetPasswordUsername"
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
        <Button
          type="submit"
          disabled={Object.keys(validForm).some(function (k) {
            return validForm[k] === false;
          })}
          className="mt-1 container fluid myBtnPrimary"
        >
          Send Reset Link
        </Button>
        <Link className="text-white text-decoration-none mt-3 d-block" to={"/"}>
          <AiOutlineArrowLeft /> Back to login
        </Link>
      </Form>
    </div>
  );
}
