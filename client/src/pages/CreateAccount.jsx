import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { FaImage, FaLock, FaTimes, FaUser } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { GoDiffRenamed } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setToastMsg, setToastShow } from "../redux/utils";

export default function CreateAccount() {
  const dispatch = useDispatch();
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
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    confirmEmail: false,
  });
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    dispatch(setToastMsg("Create Account Clicked"));
    dispatch(setToastShow(true));
  };
  const validateEmailFormat = (email) =>
    // eslint-disable-next-line
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const validateName = (name) => /^[a-z, A-Z]+$/.test(name);
  const validateUsername = (username) => /^[a-z, A-Z, 0-9]+$/.test(username);
  const checkPasswordStrength = (password) => {
    let strongPassword = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    let mediumPassword = new RegExp(
      "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
    );
    if (strongPassword.test(password)) {
      return "strong";
    } else if (mediumPassword.test(password)) {
      return "medium";
    }
    return "weak";
  };
  const updatePasswordStrengthStatus = (password) => {
    const result = checkPasswordStrength(password);
    document.getElementById("password-strength").innerHTML = result;
    if (result === "strong")
      document.getElementById("password-strength").className = "text-success";
    else if (result === "medium")
      document.getElementById("password-strength").className = "text-warning";
    else document.getElementById("password-strength").className = "text-danger";
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
                <InputGroup.Text>
                  <GoDiffRenamed />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  value={form?.firstName}
                  onChange={(e) => {
                    setForm({ ...form, firstName: e.target.value });
                    setValidForm({
                      ...validForm,
                      firstName:
                        e.target.value.length > 2 &&
                        validateName(e.target.value),
                    });
                  }}
                  placeholder="Enter First Name"
                  autoComplete="arhexChatFirstName"
                  minLength={3}
                  maxLength={16}
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
                <InputGroup.Text>
                  <GoDiffRenamed />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  value={form?.lastName}
                  onChange={(e) => {
                    setForm({ ...form, lastName: e.target.value });
                    setValidForm({
                      ...validForm,
                      lastName:
                        e.target.value.length > 2 &&
                        validateName(e.target.value),
                    });
                  }}
                  placeholder="Enter Last Name"
                  autoComplete="arhexChatLastName"
                  minLength={3}
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
              <InputGroup>
                <InputGroup.Text>
                  <MdAlternateEmail />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  value={form?.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setValidForm({
                      ...validForm,
                      email: validateEmailFormat(e.target.value),
                      confirmEmail: form.confirmEmail === e.target.value,
                    });
                  }}
                  placeholder="Enter Email Address"
                  autoComplete="arhexChatEmail"
                  minLength={10}
                  maxLength={30}
                  id="createAccountEmail"
                  required
                />
                {form.email.length > 0 && (
                  <InputGroup.Text className="bg-white">
                    {validForm.email ? (
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
                Confirm Email Address
              </Form.FloatingLabel>
              <InputGroup>
                <InputGroup.Text>
                  <MdAlternateEmail />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  value={form?.confirmEmail}
                  onChange={(e) => {
                    setForm({ ...form, confirmEmail: e.target.value });
                    setValidForm({
                      ...validForm,
                      confirmEmail:
                        validateEmailFormat(e.target.value) &&
                        e.target.value === form.email,
                    });
                  }}
                  placeholder="Confirm Email Address"
                  autoComplete="arhexChatConfirmEmail"
                  minLength={10}
                  maxLength={30}
                  id="createAccountConfirmEmail"
                  required
                />
                {form.confirmEmail.length > 0 && (
                  <InputGroup.Text className="bg-white">
                    {validForm.confirmEmail ? (
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
                  id="createAccountUsername"
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
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.FloatingLabel className="mb-2 text-white">
                Profile Picture
              </Form.FloatingLabel>
              <InputGroup>
                <InputGroup.Text>
                  <FaImage />
                </InputGroup.Text>
                <Form.Control
                  type="file"
                  onChange={(e) => {
                    setForm({ ...form, myFile: e.target.files[0] });
                  }}
                  autoComplete="arhexChatProfilePicture"
                  maxLength={16}
                  id="createAccountProfilePicture"
                  accept="image/jpg, image/png, image/jpeg"
                  required
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.FloatingLabel className="mb-2 text-white">
                Password &nbsp;
                {form.password1.length > 0 && (
                  <b className={`text-success`} id="password-strength"></b>
                )}
              </Form.FloatingLabel>
              <InputGroup>
                <InputGroup.Text>
                  <FaLock />
                </InputGroup.Text>
                <Form.Control
                  type={passwordShow ? "text" : "password"}
                  value={form?.password1}
                  onChange={(e) => {
                    setForm({ ...form, password1: e.target.value });
                    updatePasswordStrengthStatus(e.target.value);
                  }}
                  placeholder="Enter Password"
                  autoComplete="arhexChatPassword1"
                  minLength={8}
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
                <InputGroup.Text>
                  <FaLock />
                </InputGroup.Text>
                <Form.Control
                  type={passwordShow ? "text" : "password"}
                  value={form?.password2}
                  onChange={(e) =>
                    setForm({ ...form, password2: e.target.value })
                  }
                  placeholder="Confirm Password"
                  autoComplete="arhexChatPassword2"
                  minLength={8}
                  maxLength={16}
                  id="createAccountPassword2"
                  required
                />
                <InputGroup.Text onClick={() => setPasswordShow(!passwordShow)}>
                  {!passwordShow ? <AiFillEyeInvisible /> : <AiFillEye />}
                </InputGroup.Text>
                {form.password2.length > 0 && (
                  <InputGroup.Text className="bg-white">
                    {form.password2 === form.password1 ? (
                      <BsCheck className="text-success" />
                    ) : (
                      <FaTimes className="text-danger" />
                    )}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Button
          type="submit"
          className="mt-1 mb-3 container fluid myBtnPrimary"
          disabled={
            Object.keys(validForm).some(function (k) {
              return validForm[k] === false;
            }) ||
            form.password2 !== form.password1 ||
            document.getElementById("password-strength")?.className ===
              "text-danger"
          }
        >
          CreateAccount
        </Button>
        <Link className="text-white text-decoration-none mt-3" to={"/"}>
          <AiOutlineArrowLeft /> Back to login
        </Link>
      </Form>
    </div>
  );
}
