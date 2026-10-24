import { useState } from "react";
import "./TextExpender.css";

const TextExpender = ({ children }) => {
  const [read, setRead] = useState(false);

  const text = children.props.children;

  function handleRead() {
    setRead(!read);
  }

  return (
    <div className="text-expander">
      <p className="text-expander__text">
        {read ? text : text.slice(0, 90) + "..."}{" "}
        <button
          className="text-expander__button"
          onClick={handleRead}
          aria-expanded={read}
        >
          {read ? "Show Less" : "Show More"}
        </button>
      </p>
    </div>
  );
};

export default TextExpender;
