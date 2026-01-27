import React, { useCallback } from "react";
import PostRow from "./components/PostRow";
import "./App.css";
import { useFetch } from "./hooks/usefetch";

const App = () => {
  const { data, errors, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  
  const render = useCallback(
    (post, index) => (
      <PostRow
        key={post.id}
        index={index + 1}
        title={post.title}
      />
    ),
    []
  );

  if (loading)
    return <h2 className="status">Loading...</h2>;

  if (errors)
    return (
      <h2 className="status">
        Error occurred: {errors.message}
      </h2>
    );

  return ( 
    <div className="container">
      <h1>Posts</h1>

      <table className="posts-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {data?.map(render)}
        </tbody>
      </table>
    </div>
  );
};

export default App;
