import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";

export const ChatBox = ({ attachment, setAttachment }) => {
  return (
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
      <AiOutlineSend
        onClick={() => console.log(document.getElementById("message").value)}
        title="Send Message"
        className="btn-hover"
      />
    </footer>
  );
};
