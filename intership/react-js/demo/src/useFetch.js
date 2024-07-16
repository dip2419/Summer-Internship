import { useEffect, useState } from "react";

const useFetch = (url) =>{
const [blogs, setBlogs] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const delet = (id) => {
    const del = blogs.filter((blogs) => blogs.id !== id);
    setBlogs(del);
  };

useEffect(() => {
  setTimeout(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, 1000);
}, [url]);
    return{blogs,loading,error,delet}
}

export default useFetch