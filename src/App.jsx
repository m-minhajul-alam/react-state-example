import "./App.css";
import UserInfoWithUseReducer from "./components/UserInfoWithUseReducer";
// import UserInfoWithUseState from "./components/UserInfoWithUseState";

function App() {
  return (
    <div className="max-w-4xl mx-auto space-y-3">
      <h1 className="text-3xl text-center font-extralight">
        React state expampe
      </h1>
      {/* <UserInfoWithUseState /> */}
      <UserInfoWithUseReducer />
    </div>
  );
}

export default App;
