import { AiFillFile, AiOutlinePlusCircle } from "react-icons/ai";

export const ChatAttachments = () => {
  return (
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
  );
};
