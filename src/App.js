import "./App.css";
import LifeCycle from "./components/LifeCycle";
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("哈哈");

  const changeMsg=()=>{
    setMsg('666')
  }
  return (
    <div className="App">
      <LifeCycle msg={msg} />
      <button onClick={changeMsg}>更新msg</button>
    </div>
  );
}

export default App;
