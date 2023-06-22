import "bootstrap/dist/css/bootstrap.min.css";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useState } from "react";
import {
  Badge,
  Button,
  Dropdown,
  Form,
  InputGroup,
  Modal,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./pages/CreateAccount";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import { setToastShow } from "./redux/utils";
import {
  BsThreeDotsVertical,
  BsDot,
  BsCheckAll,
  BsCheck,
} from "react-icons/bs";
import {
  AiFillFile,
  AiOutlineClose,
  AiOutlinePlusCircle,
  AiOutlineSend,
} from "react-icons/ai";
import { ImAttachment } from "react-icons/im";
import { CiLogout } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const { toastShow, toastMsg } = useSelector((state) => state.toast);
  const [login, setLogin] = useState(true);
  const [attachment, setAttachment] = useState(false);
  const [audioCall, setAudioCall] = useState(false);
  const [startCallModal, setStartCallModal] = useState(false);
  const [leaveGroupModal, setLeaveGroupModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [createGroupModal, setCreateGroupModal] = useState(false);
  const [addMemberModal, setAddMemberModal] = useState(false);
  const messages = useRef(null);
  const options = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    if (messages && messages?.current) {
      messages.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return !login ? (
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
  ) : (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            style={{
              height: "100vh",
              background: "#123",
              borderRight: "1px solid #555",
            }}
            className="col-3 p-0"
          >
            <header
              className="d-flex align-items-center justify-content-between py-3 px-4"
              style={{ fontSize: "20px", background: "#123", color: "#fff" }}
            >
              <div
                className="d-flex align-items-center justify-content-start"
                style={{ columnGap: "16px" }}
              >
                <button
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "grey",
                    backgroundImage:
                      "url('https://media.licdn.com/dms/image/D4D03AQFtg7jN5d_jdg/profile-displayphoto-shrink_100_100/0/1674563643997?e=1692835200&v=beta&t=z_wFzOOzu_DOtkrYQN7gFzZr5yeic1veH0DdqTuKIEc')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    border: "none",
                  }}
                  title="Update Image"
                ></button>
                <div className="d-flex align-items-start justify-content-center flex-column">
                  <p className="m-0" style={{ fontSize: 18 }}>
                    Abdul Raheem
                  </p>
                  <span className="text-muted" style={{ fontSize: 14 }}>
                    Online
                    <BsDot className="text-success" style={{ fontSize: 32 }} />
                  </span>
                </div>
              </div>
              <div>
                <AiOutlinePlusCircle
                  className="btn-hover"
                  title="Create Group"
                  onClick={() => setCreateGroupModal(true)}
                />
                <CiLogout
                  className="btn-hover"
                  title="Logout"
                  onClick={() => setLogoutModal(true)}
                />
              </div>
            </header>
            <div
              className="p-4 py-3"
              style={{ background: "#123", borderBottom: "1px solid #555" }}
            >
              <InputGroup>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  className="form-control"
                  style={{ borderRight: "none" }}
                />
                <InputGroup.Text
                  style={{ borderLeft: "none", background: "#fff" }}
                >
                  <AiOutlineSearch />
                </InputGroup.Text>
              </InputGroup>
            </div>
            <main
              style={{
                height: "calc(100vh - 98px - 70px)",
                overflow: "hidden",
                overflowY: "scroll",
                color: "#fff",
              }}
            >
              <div
                className="d-flex align-items-center p-4 justify-content-start hover-chat-thumb active"
                style={{ columnGap: 20, borderBottom: "1px solid #555" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "grey",
                    backgroundImage:
                      "url('https://media.licdn.com/dms/image/D4D0BAQE5lpeUVrhy1A/company-logo_200_200/0/1681556360598?e=2147483647&v=beta&t=R04vK7R2A8CPz1K3fMI5ve6XffGwrwPRQV21xSLgK18')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  style={{
                    width: "calc(100% - 50px - 20px)",
                    height: "50px",
                  }}
                >
                  <p className="p-0 m-0">Dev Engineering</p>
                  <span className="text-muted">No Messages</span>
                </div>
              </div>
              {/* {Array(100)
                .fill(1)
                .map((item, index) => (
                  <div
                    className="d-flex align-items-center p-4 justify-content-start hover-chat-thumb"
                    key={index}
                    style={{ columnGap: 20, borderBottom: "1px solid #555" }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "grey",
                        backgroundImage:
                          "url('https://media.licdn.com/dms/image/D4D03AQFtg7jN5d_jdg/profile-displayphoto-shrink_100_100/0/1674563643997?e=1692835200&v=beta&t=z_wFzOOzu_DOtkrYQN7gFzZr5yeic1veH0DdqTuKIEc')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "calc(100% - 50px - 20px)",
                        height: "50px",
                      }}
                    >
                      <p className="p-0 m-0">[Group NAME]</p>
                      <span className="text-muted">TRANCATE AFTER 30...</span>
                    </div>
                  </div>
                ))} */}
            </main>
          </div>
          <div
            style={{
              height: "100vh",
              background: "#07325d",
              position: "relative",
            }}
            className="col-9 p-0"
          >
            <header
              className="d-flex align-items-center justify-content-between py-3 px-4"
              style={{ fontSize: "20px", background: "#123", color: "#fff" }}
            >
              <div
                className="d-flex align-items-center justify-content-start"
                style={{ columnGap: "16px" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "grey",
                    backgroundImage:
                      "url('https://media.licdn.com/dms/image/D4D0BAQE5lpeUVrhy1A/company-logo_200_200/0/1681556360598?e=2147483647&v=beta&t=R04vK7R2A8CPz1K3fMI5ve6XffGwrwPRQV21xSLgK18')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div>
                  <p style={{ fontSize: 14 }} className="m-0">
                    Dev Engineering
                  </p>
                  <span style={{ fontSize: 12 }} className="text-muted">
                    Total Members: 30
                  </span>
                </div>
              </div>
              <div>
                <IoMdCall
                  onClick={() => setStartCallModal(true)}
                  title="Group Call"
                  className="btn-hover"
                  style={{ marginLeft: "1rem" }}
                />
                <Dropdown style={{ display: "inline" }}>
                  <Dropdown.Toggle
                    style={{ background: "transparent", border: "none" }}
                  >
                    <BsThreeDotsVertical title="More" className="btn-hover" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ marginRight: "50px" }}>
                    <Dropdown.Item onClick={() => setAddMemberModal(true)}>
                      Add Member
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setLeaveGroupModal(true)}>
                      Leave Group
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </header>
            <main
              style={{
                height: "calc(100vh - 84px - 88px)",
                overflow: "hidden",
                overflowY: "scroll",
                position: "relative",
                padding: "16px",
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
                (i, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                      columnGap: "10px",
                      marginBottom: "26px",
                    }}
                    title={i % 2 === 0 ? "Seen by all" : "Sent"}
                  >
                    {i % 2 === 0 && (
                      <div
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          background: "grey",
                          backgroundImage:
                            "url('https://media.licdn.com/dms/image/D4D0BAQE5lpeUVrhy1A/company-logo_200_200/0/1681556360598?e=2147483647&v=beta&t=R04vK7R2A8CPz1K3fMI5ve6XffGwrwPRQV21xSLgK18')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          marginTop: "12.5px",
                        }}
                      ></div>
                    )}
                    <div
                      style={{
                        position: "relative",
                        background: "#123",
                        maxWidth: "60%",
                        padding: "10px 16px",
                        borderRadius: "10px",
                        color: "#fff",
                        paddingBottom: "36px",
                      }}
                    >
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Placeat facere officia iusto at commodi facilis
                        enim consequatur ducimus. Explicabo labore placeat
                        corporis, ea nemo assumenda unde autem doloribus
                        accusamus perferendis!
                      </p>
                      <span
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          right: 16,
                          fontSize: 12,
                          display: "flex",
                          alignItems: "center",
                          columnGap: 10,
                        }}
                        className="text-muted"
                      >
                        <span>02:40 PM</span>
                        {i % 2 === 0 ? (
                          <BsCheckAll
                            style={{ fontSize: 20, color: "dodgerblue" }}
                          />
                        ) : (
                          <BsCheck style={{ fontSize: 20 }} />
                        )}
                      </span>
                    </div>
                    {i % 2 !== 0 && (
                      <div
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          background: "grey",
                          backgroundImage:
                            "url('https://media.licdn.com/dms/image/D4D03AQFtg7jN5d_jdg/profile-displayphoto-shrink_100_100/0/1674563643997?e=1692835200&v=beta&t=z_wFzOOzu_DOtkrYQN7gFzZr5yeic1veH0DdqTuKIEc')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          marginTop: "12.5px",
                        }}
                      ></div>
                    )}
                  </div>
                )
              )}
              <div ref={messages}></div>
            </main>
            <footer
              className="d-flex align-items-center justify-content-between py-4 px-4"
              style={{
                fontSize: "20px",
                background: "#123",
                color: "#fff",
                columnGap: "20px",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-start"
                style={{ columnGap: "20px", width: "100%" }}
              >
                {!attachment ? (
                  <ImAttachment
                    onClick={() => setAttachment(true)}
                    title="Attach Files"
                    style={{ color: "#fff" }}
                    className="btn-hover"
                  />
                ) : (
                  <AiOutlineClose
                    onClick={() => setAttachment(false)}
                    title="ACancel"
                    style={{ color: "#fff" }}
                    className="btn-hover"
                  />
                )}
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  rows={1}
                  className="form-control"
                  placeholder="Type a message"
                ></textarea>
              </div>
              <AiOutlineSend title="Send Message" className="btn-hover" />
            </footer>
            {attachment && (
              <div
                style={{
                  position: "absolute",
                  bottom: "86px",
                  left: "0",
                  width: "100%",
                  background: "#152F48",
                  height: "150px",
                  overflow: "hidden",
                  overflowX: "scroll",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "100%" }} className="p-4">
                  <button
                    className="px-4 me-3"
                    style={{
                      border: "none",
                      color: "#fff",
                      background: "transparent",
                      fontSize: "50px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      rowGap: "8px",
                    }}
                  >
                    <AiOutlinePlusCircle />
                    <span style={{ fontSize: "14px" }}>Add File</span>
                  </button>
                  <button
                    className="px-4 me-3"
                    style={{
                      border: "none",
                      color: "#fff",
                      background: "transparent",
                      fontSize: "50px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      rowGap: "8px",
                    }}
                  >
                    <AiFillFile />
                    <span style={{ fontSize: "14px" }}>MyFile.txt</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal
        show={audioCall}
        onHide={() => setAudioCall(false)}
        fullscreen
        className="p-0 m-0 full-page-only-modal"
      >
        <div className="row p-0 m-0" style={{ background: "#222" }}>
          <div className="col-12 p-0 m-0" style={{ height: "100vh" }}>
            <header
              className="d-flex align-items-center justify-content-between py-3 px-4"
              style={{ fontSize: "20px", background: "#111", color: "#fff" }}
            >
              <div
                className="d-flex align-items-center justify-content-start"
                style={{ columnGap: "16px" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "grey",
                    backgroundImage:
                      "url('https://media.licdn.com/dms/image/D4D0BAQE5lpeUVrhy1A/company-logo_200_200/0/1681556360598?e=2147483647&v=beta&t=R04vK7R2A8CPz1K3fMI5ve6XffGwrwPRQV21xSLgK18')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div>
                  <p style={{ fontSize: 14 }} className="m-0">
                    Dev Engineering
                  </p>
                  <span style={{ fontSize: 12 }} className="text-muted">
                    01:30:41
                  </span>
                </div>
              </div>
              <button
                style={{
                  border: "none",
                  background: "red",
                  color: "#fff",
                  borderRadius: 50,
                  padding: "0.5rem 1.4rem",
                }}
                onClick={() => setAudioCall(false)}
              >
                <IoMdCall title="End Call" />
              </button>
            </header>
            <main
              className="p-1 px-3"
              style={{
                height: "calc(100vh - 83px)",
                overflow: "hidden",
                overflowY: "scroll",
              }}
            >
              <div className="row">
                {Array(100)
                  .fill(1)
                  .map((item, index) => (
                    <div
                      className="col-3 p-5"
                      style={{ border: "1px solid #555" }}
                    >
                      <div className="d-flex align-items-center justify-content-center flex-column">
                        <div
                          style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            background: "grey",
                            backgroundImage:
                              "url('https://media.licdn.com/dms/image/D4D0BAQE5lpeUVrhy1A/company-logo_200_200/0/1681556360598?e=2147483647&v=beta&t=R04vK7R2A8CPz1K3fMI5ve6XffGwrwPRQV21xSLgK18')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                        <span
                          className="mt-4"
                          style={{ fontSize: "32px", color: "#fff" }}
                        >
                          Abdul Raheem
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </main>
          </div>
        </div>
      </Modal>
      <Modal show={leaveGroupModal}>
        <Modal.Header>
          <Modal.Title>Leave Group</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3">
          <p>Is it certain that you want to leave this group?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setLeaveGroupModal(false)}>
            Cancel
          </Button>
          <Button variant="danger">Confirm</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={logoutModal}>
        <Modal.Header>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3">
          <p>Is it certain that you want to logout?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setLogoutModal(false)}>
            Cancel
          </Button>
          <Button variant="danger">Confirm</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={startCallModal}>
        <Modal.Header>
          <Modal.Title>Start Group Call</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3">
          <p>Is it certain that you want to start a group call?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setStartCallModal(false)}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => {
              setStartCallModal(false);
              setAudioCall(true);
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={createGroupModal}>
        <Modal.Header>
          <Modal.Title>Create Group</Modal.Title>
        </Modal.Header>
        <form action="" method="post">
          <Modal.Body className="p-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Group Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                placeholder="Enter group name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="image">Display Picture</Form.Label>
              <Form.Control type="file" name="image" id="image" required />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setCreateGroupModal(false)}
            >
              Cancel
            </Button>
            <Button variant="success">Create</Button>
          </Modal.Footer>
        </form>
      </Modal>
      <Modal show={addMemberModal}>
        <Modal.Header>
          <Modal.Title>Add Member to Group</Modal.Title>
        </Modal.Header>
        <form action="" method="post">
          <Modal.Body className="p-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="search">Search</Form.Label>
              <Typeahead options={options} placeholder="Search..." />
            </Form.Group>
            <Badge pill bg="primary" className="me-2">
              Primary
              <AiOutlineClose style={{ marginLeft: 10 }} />
            </Badge>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setAddMemberModal(false)}
            >
              Cancel
            </Button>
            <Button variant="success">Create</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default App;
