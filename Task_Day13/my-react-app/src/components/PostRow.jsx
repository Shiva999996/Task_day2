import React from "react";

const PostRow = React.memo(({ index, title }) => {
  console.log("Row rendered:", index);

  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
    </tr>
  );
});

export default PostRow;
