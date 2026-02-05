import React, { Suspense, useState } from "react";
import "./App.css";

const SlowPage = React.lazy(() => import("./pages/SlowPage"));
const NormalPage = React.lazy(() => import("./pages/NormalPage"));
const VirtualizedPage = React.lazy(() => import("./pages/VirtualizedPage"));

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  value: `Item ${i}`,
}));

export default function App() {
  const [mode, setMode] = useState("slow");

  return (
   <div className="app">
  <div className="controls">
    <button onClick={() => setMode("slow")}>Slow</button>
    <button onClick={() => setMode("normal")}>Normal</button>
    <button onClick={() => setMode("virtual")}>Virtualized</button>
  </div>

  <div className="content">
    <Suspense fallback={<h3>Loading page...</h3>}>
      {mode === "slow" && <SlowPage items={items} />}
      {mode === "normal" && <NormalPage items={items} />}
      {mode === "virtual" && <VirtualizedPage items={items} />}
    </Suspense>
  </div>
</div>

  );
}
