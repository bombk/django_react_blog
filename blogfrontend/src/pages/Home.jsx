import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { API_URL } from "../config";

function Home() {
    const [posts, setPosts] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);

    useEffect(() => {
        // Fetch all posts (limit to 9)
        fetch(`${API_URL}/posts/`)
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 9)));  // Limit to 9 posts

        // Fetch popular posts
        fetch(`${API_URL}/popular-posts/`)
            .then(response => response.json())
            .then(data => setPopularPosts(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Carousel */}
            <Carousel />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Main Content (News Posts in 3 Columns on larger screens, 1 column on mobile) */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map(post => (
                        <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
                            {post.image && (
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                            )}
                            <h2 className="text-xl font-semibold">
                                <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600">{post.content.substring(0, 50)}...</p>
                            <Link to={`/post/${post.id}`} className="text-blue-500 mt-3 block">
                                Read More →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Sidebar (Popular Posts) */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Popular Posts</h2>
                    {popularPosts.map(post => (
                        <div key={post.id} className="mb-4">
                            <h3 className="text-lg font-medium">
                                <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="text-gray-600 text-sm">{post.content.substring(0, 50)}...</p> {/* 50 chars */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
