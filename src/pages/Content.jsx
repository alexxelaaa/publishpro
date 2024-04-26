import React from 'react'
import {useParams} from "react-router-dom"
import useLocalStorage from '../hooks/useLocalStorage'
import content from "../styles/Content.module.css"

function Content() {

  const {id} = useParams();
  const [posts] = useLocalStorage('posts',[]);
  const post = posts.find(post => post.id.toString()=== id)


  return (
    <div>
      {post ? (
        <div className={content.postContainer}>
          <h1 className={content.postTitle}>{post.title}</h1>
          <img className={content.postImage} src={post.coverImg} alt="Cover" />
          <p className={content.postDescription}>{post.description}</p>
          <p className={content.postContent}>{post.content}</p>
        </div>

      ): <p>Post Not Found</p>}
    </div>
  )
}

export default Content