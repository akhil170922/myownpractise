//use state with objects
import React, { useState } from "react";

const HookCounter3 = () => {
  //usage of objects in use state...
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        placeholder="enter first name"
        value={name.firstName}
        onChange={(e) =>
          setName({
            ...name,
            firstName: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="enter last name"
        value={name.lastName}
        onChange={(e) =>
          setName({
            ...name,
            lastName: e.target.value,
          })
        }
      />
      <h3>firstname: {name.firstName}</h3>
      <h3>lastname: {name.lastName}</h3>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default HookCounter3;
