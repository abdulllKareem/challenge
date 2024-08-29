import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  // Function to fetch data
  async function getData() {
    try {
      let res = await axios.get('https://www.reddit.com/r/reactjs.json');
      setPosts(res.data.data.children);
    } catch(e) {
      console.log("ERROR- ", e);
    }  
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Reddit ReactJS Posts</h1>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <h2>{post.data.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.data.selftext_html }} />
            <a href={post.data.url} target="_blank" rel="noopener noreferrer">Read more</a>
            <p>Score: {post.data.score}</p>
            <h1>hello world</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
