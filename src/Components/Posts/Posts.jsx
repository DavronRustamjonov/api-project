import React, { useEffect, useState } from 'react';
import './Posts.css';
import { Spin } from 'antd';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log('Malumot:', data); 
        setPosts(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="container posts-container">
      {posts.length > 0 ? (
        posts.map(post => (
          <ul className='posts-list' key={post.id}> 
            <li className='posts-item'>
              <div className="posts">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </li>
          </ul>
        ))
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', 
        }}>
          <Spin/>
        </div>
      )}
    </div>
  );
}

export default Posts;
