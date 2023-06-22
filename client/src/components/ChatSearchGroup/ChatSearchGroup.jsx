import { InputGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

export const ChatSearchGroup = () => {
  return (
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
        <InputGroup.Text style={{ borderLeft: "none", background: "#fff" }}>
          <AiOutlineSearch />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};
