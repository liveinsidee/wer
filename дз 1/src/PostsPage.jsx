// pages/PostsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts: ', error);
            });
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                ) : (
                    <li>No posts available</li>
                )}
            </ul>
        </div>
    );
}

export default PostsPage;
