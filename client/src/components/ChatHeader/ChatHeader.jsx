import { Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";

export const ChatHeader = ({
  setAddMemberModal,
  setStartCallModal,
  setLeaveGroupModal,
}) => {
  return (
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
  );
};
