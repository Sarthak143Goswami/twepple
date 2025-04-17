// components/Blog/BlogPost.jsx
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useBlogPost } from '../hooks/useBlogPosts';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaGlobe, FaBrain, FaRegClock, FaChild, FaArrowLeft, FaArrowUp } from 'react-icons/fa';
import { blogPosts } from '../utils/blogPosts';
import BlogFooter from './BlogFooter';

const BlogPost = () => {
  const { slug } = useParams();
  const { post } = useBlogPost(slug);

  // Scroll to top function
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return post ? (
    <>
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen">
      <Helmet>
        <title>{post.title} | Twepple Kids</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="max-w-7xl mx-auto px-4 py-12 lg:px-8">
        <div className="lg:grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-8 bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            {/* Back to Blogs Button */}
            <Link 
              to="/blog"
              className="mb-8 inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full 
                        hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to All Articles</span>
            </Link>
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-medium flex items-center gap-2">
                  <FaChild className="text-blue-600" />
                  {post.ageGroup}
                </span>
                <time className="text-gray-500 flex items-center gap-2">
                  <FaRegClock className="text-gray-400" />
                  <span className="font-bold">{post.date}</span>
                </time>

              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 mt-8 py-6 bg-blue-50 rounded-xl px-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
                <div>
                  <p className="font-medium text-lg text-gray-800">{post.author.name}</p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Child Development Expert
                  </p>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="relative group mb-12 overflow-hidden rounded-2xl">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>
            )}

            {/* Content */}
            <div 
              className="prose lg:prose-xl max-w-none mb-12
                        [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-16 [&_h2]:mb-8 [&_h2]:pb-2 [&_h2]:border-b-2 [&_h2]:border-blue-100
                        [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-4
                        [&_ul]:list-disc [&_ul]:pl-8 [&_ul]:space-y-3 [&_ul]:text-gray-700
                        [&_blockquote]:border-l-4 [&_blockquote]:border-blue-300 [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:bg-blue-50 [&_blockquote]:rounded-xl
                        [&_a]:text-blue-600 [&_a]:hover:text-blue-800 [&_a]:font-medium
                        [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:my-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Sharing */}
            <div className="border-t border-gray-100 pt-8 mt-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Spread the Knowledge</h3>
                  <p className="text-gray-600 max-w-md">Share this valuable resource with other parents and educators</p>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                  <TwitterShareButton
                    url={window.location.href}
                    title={post.title}
                    className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg"
                  >
                    <FaTwitter className="text-xl" />
                    <span className="text-sm font-medium">Share on Twitter</span>
                  </TwitterShareButton>
                  <FacebookShareButton
                    url={window.location.href}
                    quote={post.excerpt}
                    className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg"
                  >
                    <FaFacebook className="text-xl" />
                    <span className="text-sm font-medium">Share on Facebook</span>
                  </FacebookShareButton>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4 mt-8 lg:mt-0">
            <div className="sticky top-20 space-y-4 h-[calc(100vh-8rem)] overflow-y-auto pb-8">
              {/* Multilingual Benefits Card */}
              <div className="bg-white p-5 rounded-2xl shadow-xl border border-blue-50">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-800">
                  <FaGlobe className="text-blue-500 text-3xl" />
                  Multilingual Benefits
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <span className="p-3 bg-green-100 rounded-lg">
                      <FaBrain className="text-2xl text-green-600" />
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">Enhanced Cognitive Flexibility</p>
                      <p className="text-sm text-gray-600">Improved problem-solving skills</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <span className="p-3 bg-purple-100 rounded-lg">
                      <FaGlobe className="text-2xl text-purple-600" />
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">Cultural Awareness</p>
                      <p className="text-sm text-gray-600">Understanding global perspectives</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Featured Games Card */}
              <div className="bg-white p-5 rounded-2xl shadow-xl border border-blue-50">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Featured Games</h3>
                <div className="space-y-4">
                  <a href="#/games" className="group block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🌍</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-blue-600">Toddler's Learning Games</h4>
                        <p className="text-sm text-gray-600 mt-1">Interactive 28<b>+</b> language journey</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Recent Posts Card */}
              <div className="bg-white p-5 rounded-2xl shadow-xl border border-blue-50">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Recent Articles</h3>
                <div className="space-y-4">
                  {blogPosts.slice(4, 6).map(recentPost => (
                    <a 
                      key={recentPost.id} 
                      href={`#/blog/${recentPost.slug}`}
                      className="group flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <img
                        src={recentPost.featuredImage}
                        alt={recentPost.title}
                        className="w-20 h-20 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                      />
                      <div>
                        <p className="font-medium text-gray-800 group-hover:text-blue-600">{recentPost.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                            {recentPost.ageGroup}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(recentPost.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
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
    <BlogFooter />
    </>
  ) : null;
};

export default BlogPost;