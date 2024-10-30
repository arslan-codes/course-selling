import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  function redirect() {
    navigate("/");
  }
  return (
    <div>
      Contact
      <div>
        <button onClick={redirect}>Redirect to home</button>
      </div>
    </div>
  );
};

export default Contact;
