import { Button, Modal } from "react-bootstrap";
import { IoMdCall } from "react-icons/io";

export const ChatCallModal = ({
  audioCall,
  setAudioCall,
  startCallModal,
  setStartCallModal,
}) => {
  return (
    <>
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
                      key={index}
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
    </>
  );
};
