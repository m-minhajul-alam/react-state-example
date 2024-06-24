import { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  hobbise: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    case "addAge":
      return { ...currentState, age: action.payload };

    case "addHobbies":
      return {
        ...currentState,
        hobbise: [...currentState.hobbise, action.payload],
      };

    default:
      return currentState;
  }
};

const UserInfoWithUseReducer = () => {
  // const [state, dispatch] = useReducer(function, value)
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log({ user: state });
  };

  return (
    <form onSubmit={handelSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className="border border-black rounded-md py-1 px-2"
        type="text"
        name="name"
        id="name"
        placeholder="user name"
      />
      <input
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        className="border border-black rounded-md py-1 px-2"
        type="number"
        name="age"
        id="age"
        placeholder="user age"
      />
      <input
        onBlur={(e) =>
          dispatch({ type: "addHobbies", payload: e.target.value })
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

export default UserInfoWithUseReducer;
