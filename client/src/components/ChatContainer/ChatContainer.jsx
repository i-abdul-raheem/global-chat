import { BsCheck, BsCheckAll } from "react-icons/bs";

export const ChatContainer = ({ messages }) => {
  return (
    <main
      style={{
        height: "calc(100vh - 84px - 88px)",
        overflow: "hidden",
        overflowY: "scroll",
        position: "relative",
        padding: "16px",
      }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i, index) => (
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              facere officia iusto at commodi facilis enim consequatur ducimus.
              Explicabo labore placeat corporis, ea nemo assumenda unde autem
              doloribus accusamus perferendis!
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
                <BsCheckAll style={{ fontSize: 20, color: "dodgerblue" }} />
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
      ))}
      <div ref={messages}></div>
    </main>
  );
};
