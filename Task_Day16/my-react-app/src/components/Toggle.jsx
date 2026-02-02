//Toggle Component Using Render Props

import { useState } from "react";

function Toggle({ children }) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prev) => !prev);
  }

  return children({ on, toggle });
}

export default Toggle;
