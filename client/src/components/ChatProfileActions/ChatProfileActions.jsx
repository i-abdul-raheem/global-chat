import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

export const ChatProfileActions = ({ setCreateGroupModal, setLogoutModal }) => {
  return (
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
  );
};
