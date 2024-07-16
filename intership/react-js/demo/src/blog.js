import React from "react";
import { Link, useParams } from "react-router-dom";

const Blog = ({ blogs, title, delet, heading }) => {
  // const blogs = props.blogs
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-3xl font-medium text-center">
        {heading} {id}
      </h1>
      <b className="text-red-600 text-2xl">{title}</b>
      {blogs?.map((item) => (
        <div key={item.id} className="py-5 hover:shadow-lg ps-4 ">
          <Link to={`/blog/${item.id}`}>
            <h2>
              My Name is{" "}
              <b>
                {item.name} {item.sureName}
              </b>
            </h2>
            <p>
              My age is <b>{item.age}</b>
            </p>
          </Link>
          <button
            className="border border-black mt-2 px-1"
            onClick={() => delet(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
