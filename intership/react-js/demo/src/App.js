import React from "react";
import Header from "./header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Activity from "./activity";
import Blog from "./blog";
import Footer from "./footer";

const App = () => {
  return (
  <div className="w-full h-[100vh]">
    <Router>
      <Header />
      <section className="w-full h-[569px] overflow-auto">
        <div className="w-full flex flex-col justify-center items-center pt-10">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Routes>
            <Route path="/activity" element={<Activity />}></Route>
          </Routes>
          <Routes>
            <Route path="/blog/:id" element={<Blog heading="Blog Page"/>}></Route>
          </Routes>
        </div>
      </section>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
