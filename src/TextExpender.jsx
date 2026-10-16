import { useState } from "react";

const TextStyle = {
  display: "flex",
  alignItems: "center",
};

const buttonStyle = {
  outline: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
  backgroundColor: "pink",
};

const TextExpender = ({ children }) => {
  const [read, setRead] = useState(false);

  function handleRead() {
    setRead(!read);
  }

  return (
    <div style={TextStyle}>
      <p>
        {read
          ? children.props.children.slice(0, children.props.children.length)
          : children.props.children.slice(0, 90) + "..."}
        <button style={buttonStyle} onClick={handleRead}>
          {read ? "show Less" : "Show More"}{" "}
        </button>
      </p>
    </div>
  );
};

export default TextExpender;
