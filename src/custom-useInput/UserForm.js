import React from "react";
import useInput from "./useInput";
const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`first name: ${firstName} LastName:${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...bindFirstName} />
        <input {...bindLastName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
