// components/Blog/BlogPosts.jsx
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import BlogHeader from './BlogHeader';
import Footer from './BlogFooter';
import { FaArrowUp } from 'react-icons/fa';

const BlogPosts = () => {
  const { posts } = useBlogPosts();

  // Scroll to top function
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <BlogHeader />
    <div className="max-w-7xl mx-auto px-4 py-24 pt-32">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Parenting & Education Resources
      </h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {post.featuredImage && (
              <div className="relative h-48">
                <img 
                  src={post.featuredImage}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {post.ageGroup}
                </span>
              </div>
            )}
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0,2).map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <time 
                    dateTime={post.createdAt}
                    className="text-xs text-gray-500"
                  >
                    <span className="font-medium">{post.date}</span>
                  </time>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* Back to Top Button */}
             <button 
              onClick={handleScrollToTop}
              className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full 
                       shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 z-50"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-xl" />
            </button>
    </div>
    <Footer />
    </>
  );
};

export default BlogPosts;