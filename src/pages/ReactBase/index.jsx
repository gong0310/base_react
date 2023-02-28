import LifeCycle from "../../components/LifeCycle";
import RefBase from "../../components/Ref";
import ProviderContext from "../../components/Provider,Context";
import Base from "../../components/Base";
import Hooks from "../../components/Hooks";
import { useState } from "react";

function ReactBase() {
  const [msg, setMsg] = useState("哈哈");

  const changeMsg = () => {
    setMsg("666");
  };
  return (
    <div>
      <Base />
      <Hooks/>
      <LifeCycle msg={msg} />
      <button onClick={changeMsg}>更新msg</button>
      <RefBase />
      <ProviderContext />
    </div>
  );
}

export default ReactBase;
