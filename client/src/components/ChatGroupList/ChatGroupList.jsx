export const ChatGroupList = () => {
  return (
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
    </main>
  );
};
