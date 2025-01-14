import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className='App'>
      <Header />
      <About image={blogData.image} text={blogData.about} />
      <ArticleList />
    </div>
  );
}

export default App;
