export const ChatLeft = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        background: "#123",
        borderRight: "1px solid #555",
      }}
      className="col-3 p-0"
    >
      {children}
    </div>
  );
};
