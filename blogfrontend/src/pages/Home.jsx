import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/")
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <Carousel />

            <h1 className="text-3xl font-bold text-center my-6">Latest News</h1>

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
