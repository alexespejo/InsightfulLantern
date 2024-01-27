import React, { MouseEventHandler } from "react";

interface PostButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const PostButton: React.FC<PostButtonProps> = ({ onClick }) => {
  return (
    <button
      className="post-button"
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        fontSize: "24px",
        cursor: "pointer",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        zIndex: "1000",
      }}
      onClick={onClick}
    >
      +
    </button>
  );
};

export default PostButton;
