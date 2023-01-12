import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList(){
  console.log(blogData.posts)
    const lists =blogData.posts.map((post)=>{
      return <Article
       key={post.id}
       title= {post.title}
       date = {post.date}
       preview = {post.preview}
       />
    })
    return(
      <main>
        {lists}
      </main>
    )
  }

export default ArticleList;