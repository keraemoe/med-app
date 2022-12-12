import React from "react";
import Rout from "../../Routes/Routes";
import { FloatButton } from "antd";

function App() {
  return (
    <div>
      <FloatButton tooltip={<div>Help!</div>} />
      <Rout />
    </div>
  );
}

export default App;
