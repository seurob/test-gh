import React from 'react';
import { Link } from "react-router-dom";
import { useFetch } from "./useFetch";

const Posts = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error !== "") {
    return <h1>{error}</h1>;
  }

  return (
    <div class="container p-5 my-5 border">
      <h1>Posts</h1>
      {data.map((item) => (
        <h4 key={item.id}>
          <div class="list-group">
            <Link class="list-group-item list-group-item-action list-group-item-light" 
              to={`/posts/${item.id}`}> {item.id} - {item.title}
            </Link>
          </div>
        </h4>
      ))}
    </div>
  );
};

export default Posts;