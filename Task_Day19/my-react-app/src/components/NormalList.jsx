import React from "react";

const Row = React.memo(({ item }) => {
  // simulate expensive render
  let sum = 0;
  for (let i = 0; i < 300000; i++) {
    sum += i;
  }

  return <div className="list-item">{item.value}</div>;
});

export default function NormalList({ items }) {
  return (
    <div className="list-container">
      {items.map((item) => (
        <Row key={item.id} item={item} />
      ))}
    </div>
  );
}
