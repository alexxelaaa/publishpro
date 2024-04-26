import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import home from "../styles/Home.module.css";

function Home() {
  const [posts] = useLocalStorage("posts", []);
  return (
    <div className={home.cardsContainer}>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/content/${post.id}`} className={home.card}>
            <img className={home.cardImage} src={post.coverImg} alt="Cover" />
            <div className={home.cardBody}>
              <h2 className={home.cardTitle}>{post.title}</h2>
              <p className={home.cardDescription}>{post.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
