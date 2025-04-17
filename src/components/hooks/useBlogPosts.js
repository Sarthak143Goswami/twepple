// hooks/useBlogPosts.js
import { useEffect, useState } from 'react';
import { blogPosts } from '../utils/blogPosts';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const sortedPosts = [...blogPosts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedPosts);
    } catch (err) {
      console.error('Error loading posts:', err);
    }
  }, []);

  return { posts };
};

export const useBlogPost = (slug) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogPosts.find(post => post.slug === slug);
    setPost(foundPost || null);
  }, [slug]);

  return { post };
};