import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Empowering Girls: Unlocking Their Potential and Building Confidence.", content: "Empowering girls is key to unlocking their potential. By providing education, positive role models, and opportunities, we can help girls grow into confident, caoable women who will make a great and postive impact in the society and the world at large. Let us come together to empower girls to reach their full potential in every aspect of their lives." }
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const addPost = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      const post = {
        id: Date.now(),
        title: newPost.title,
        content: newPost.content
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div className="App">
      <h1> &#128221;My Blogging Platform</h1>

      <form onSubmit={addPost}>
        <input
          type="text"
          name="title"
          placeholder="Blog post headline"
          value={newPost.title}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="content"
          placeholder="&#128161;What's on your mind..."
          value={newPost.content}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Create your post</button>
      </form>
      <hr />

      <div>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
