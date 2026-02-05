import React from "react";

const SlowItem = React.memo(function SlowItem({ value }) {
  
  let sum = 0;
  for (let i = 0; i < 300000; i++) {
    sum += i;
  }

  return (
    <div className="list-item">
      {value}
    </div>
  );
});

export default function SlowList({ items = [] }) {
  return (
    <div className="list-container">
      {items.map(item => (
        <SlowItem key={item.id} value={item.value} />
      ))}
    </div>
  );
}
