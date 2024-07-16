// import { Data } from "./data";
import Blog from "./blog";
import useFetch from "./useFetch";

const Home = () => {
  // const [blogs, setBlogs] = useState(Data);
 
 
  const { blogs, loading, error, delet} = useFetch("http://localhost:8000/blogs");

  

  return (
    <div className="w-full max-w-[300px] ">
      {error && <div className="text-3xl font-medium text-center">{error}</div>}
      {loading && (
        <div className="text-3xl font-medium text-center">Loading...</div>
      )}
      {blogs && <Blog blogs={blogs} title="All Members" delet={delet} />}
      
      {/* <Blog blogs={blogs.filter((item) => item.sureName === "Patel")}  title="Patel Members" /> */}
    </div>
  );
};

export default Home;
