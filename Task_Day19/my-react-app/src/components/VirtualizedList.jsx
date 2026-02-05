import React from "react";
import { FixedSizeList as List } from "react-window";

const Row = React.memo(({ index, style, data }) => {
  return (
    <div style={style} className="virtual-row">
      {data[index].value}
    </div>
  );
});

export default function VirtualizedList({ items }) {
  return (
    
    <List
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={35}
      itemData={items}
    >
      {Row}
    </List>

  );
}
