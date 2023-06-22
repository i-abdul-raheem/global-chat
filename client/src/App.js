import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
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
import { useEffect } from "react";
import { useRef } from "react";
import {
  ChatAttachments,
  ChatBox,
  ChatGroupList,
  ChatHeader,
  ChatRight,
  ChatSearchGroup,
  ChatContainer,
  ChatProfileActions,
  ChatLeft,
  ChatLayout,
  ChatCallModal,
  ChatLeaveGroup,
  ChatLogout,
  ChatCreateGroup,
  ChatAddToGroup,
} from "./components";

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
      <ChatLayout>
        <ChatLeft>
          <ChatProfileActions
            setCreateGroupModal={setCreateGroupModal}
            setLogoutModal={setLogoutModal}
          />
          <ChatSearchGroup />
          <ChatGroupList />
        </ChatLeft>
        <ChatRight>
          <ChatHeader
            setAddMemberModal={setAddMemberModal}
            setStartCallModal={setStartCallModal}
            setLeaveGroupModal={setLeaveGroupModal}
          />
          <ChatContainer messages={messages} />
          <ChatBox setAttachment={setAttachment} attachment={attachment} />
          {attachment && <ChatAttachments />}
        </ChatRight>
      </ChatLayout>
      <ChatCallModal
        audioCall={audioCall}
        setAudioCall={setAudioCall}
        startCallModal={startCallModal}
        setStartCallModal={setStartCallModal}
      />
      <ChatLeaveGroup
        leaveGroupModal={leaveGroupModal}
        setLeaveGroupModal={setLeaveGroupModal}
      />
      <ChatLogout logoutModal={logoutModal} setLogoutModal={setLogoutModal} />

      <ChatCreateGroup
        createGroupModal={createGroupModal}
        setCreateGroupModal={setCreateGroupModal}
      />
      <ChatAddToGroup
        addMemberModal={addMemberModal}
        setAddMemberModal={setAddMemberModal}
      />
    </>
  );
}

export default App;
