import React from "react";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import editor from "../styles/Editor.module.css";

function Editor() {
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useLocalStorage("posts", []);
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: new Date().getTime(),
      title,
      coverImg,
      description,
      content,
    };

    setPosts([...posts, newPost]);

    setTitle("");
    setCoverImg("");
    setDescription("");
    setContent("");
    setIsPublished(true);
    setTimeout(() => setIsPublished(false), 3000);
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (upload) {
        setCoverImg(upload.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteAllPosts = () => {
    setPosts([]);
  };

  return (
    <div className={editor.editor}>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit} className={editor.form}>
        <label className={editor.label}>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <label className={editor.label}>Cover Img:</label>
        <input
          type="file"
          onChange={handleImgChange}
          accept="image/*"
          required
        />
        <label className={editor.label}>What is it about:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <label className={editor.label}>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <div>
          <button type="submit" className={editor.button}>
            Publish
          </button>
          {isPublished && (
            <p className={editor.successMessage}>
              Post published successfully!
            </p>
          )}
        </div>

        <div>
          <button onClick={handleDeleteAllPosts} className={editor.button}>
            Delete All Posts
          </button>
        </div>
      </form>
    </div>
  );
}

export default Editor;
