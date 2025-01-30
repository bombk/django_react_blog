import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";


function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/posts/`)
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">
                                <Link to={`/post/${post.id}`} className="text-blue-600 hover:underline">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-gray-700 mt-2">{post.content.substring(0, 100)}...</p>
                            <Link to={`/post/${post.id}`} className="text-blue-500 mt-3 block">
                                Read More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;