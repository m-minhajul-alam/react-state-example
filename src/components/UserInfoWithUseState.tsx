// user = {name : "user name", age : 30, hobbies: ["football", "gamming"]}

import React, { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: "", age: "", hobbies: [] });
  console.log(user);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log({ user: user });
  };

  return (
    <form className="flex flex-col gap-3">
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="border border-black rounded-md py-1 px-2"
        type="text"
        name="name"
        id="name"
        placeholder="user name"
      />
      <input
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        className="border border-black rounded-md py-1 px-2"
        type="number"
        name="age"
        id="age"
        placeholder="user age"
      />
      <input
        onBlur={(e) =>
          setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        }
        className="border border-black rounded-md py-1 px-2"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="user hobbies"
      />
      <button
        className="w-full py-2 text-white font-bold bg-black rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default UserInfoWithUseState;
