import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

export default function CreateAccount() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password1: "",
    password2: "",
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    myFile: "",
  });
  const [validForm, setValidForm] = useState({
    firstName: true,
    lastName: false,
    username: true,
    password1: true,
    password2: true,
    email: true,
    confirmEmail: true,
    myFile: true,
  });
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    console.log("Create Account Clicked", form);
  };
  return (
    <div className="login">
      <Form onSubmit={handleCreateAccount}>
        <Row>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.FloatingLabel className="mb-2 text-white">
                First Name
              </Form.FloatingLabel>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={form?.firstName}
                  onChange={(e) => {
                    setForm({ ...form, firstName: e.target.value });
                    setValidForm({
                      ...validForm,
                      firstName: e.target.value.length > 2,
                    });
                  }}
                  placeholder="Enter First Name"
                  autoComplete="arhexChatFirstName"
                  maxLength={8}
                  id="createAccountFirstName"
                  required
                />
                {form.firstName.length > 0 && (
                  <InputGroup.Text className="bg-white">
                    {validForm.firstName ? (
                      <BsCheck className="text-success" />
                    ) : (
                      <FaTimes className="text-danger" />
                    )}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.FloatingLabel className="mb-2 text-white">
                Last Name
              </Form.FloatingLabel>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={form?.lastName}
                  onChange={(e) => {
                    setForm({ ...form, lastName: e.target.value });
                    setValidForm({
                      ...validForm,
                      lastName: e.target.value.length > 2,
                    });
                  }}
                  placeholder="Enter Last Name"
                  autoComplete="arhexChatLastName"
                  maxLength={16}
                  id="createAccountLastName"
                  required
                />
                {form.lastName.length > 0 && (
                  <InputGroup.Text className="bg-white">
                    {validForm.lastName ? (
                      <BsCheck className="text-success" />
                    ) : (
                      <FaTimes className="text-danger" />
                    )}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.FloatingLabel className="mb-2 text-white">
                Email Address
              </Form.FloatingLabel>
              <Form.Control
                type="email"
                value={form?.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter Email Address"
                autoComplete="arhexChatEmail"
                maxLength={8}
                id="createAccountEmail"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.FloatingLabel className="mb-2 text-white">
                Confirm Email Address
              </Form.FloatingLabel>
              <Form.Control
                type="text"
                value={form?.confirmEmail}
                onChange={(e) =>
                  setForm({ ...form, confirmEmail: e.target.value })
                }
                placeholder="Confirm Email Address"
                autoComplete="arhexChatConfirmEmail"
                maxLength={16}
                id="createAccountConfirmEmail"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
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
                id="createAccountUsername"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.FloatingLabel className="mb-2 text-white">
                Profile Picture
              </Form.FloatingLabel>
              <Form.Control
                type="file"
                onChange={(e) => setForm({ ...form, myFile: e.target.value })}
                autoComplete="arhexChatProfilePicture"
                maxLength={16}
                id="createAccountProfilePicture"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.FloatingLabel className="mb-2 text-white">
                Password
              </Form.FloatingLabel>
              <InputGroup>
                <Form.Control
                  type={passwordShow ? "text" : "password"}
                  value={form?.password1}
                  onChange={(e) =>
                    setForm({ ...form, password1: e.target.value })
                  }
                  placeholder="Enter Password"
                  autoComplete="arhexChatPassword1"
                  maxLength={16}
                  id="createAccountPassword1"
                  required
                />
                <InputGroup.Text onClick={() => setPasswordShow(!passwordShow)}>
                  {!passwordShow ? <AiFillEyeInvisible /> : <AiFillEye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.FloatingLabel className="mb-2 text-white">
                Confirm Password
              </Form.FloatingLabel>
              <InputGroup>
                <Form.Control
                  type={passwordShow ? "text" : "password"}
                  value={form?.password2}
                  onChange={(e) =>
                    setForm({ ...form, password2: e.target.value })
                  }
                  placeholder="Confirm Password"
                  autoComplete="arhexChatPassword2"
                  maxLength={16}
                  id="createAccountPassword2"
                  required
                />
                <InputGroup.Text onClick={() => setPasswordShow(!passwordShow)}>
                  {!passwordShow ? <AiFillEyeInvisible /> : <AiFillEye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Button
          type="submit"
          className="mt-1 mb-3 container fluid myBtnPrimary"
        >
          CreateAccount
        </Button>
        <Link className="text-white text-decoration-none mt-3 d-block" to={"/"}>
          <AiOutlineArrowLeft /> Back to login
        </Link>
      </Form>
    </div>
  );
}
