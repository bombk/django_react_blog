import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts/")
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold">Blog Posts</h1>
            {posts.map(post => (
                <div key={post.id} className="p-4 shadow-md bg-white rounded-lg my-4">
                    <h2 className="text-xl font-semibold">
                        <Link to={`/post/${post.id}`} className="text-blue-500">
                            {post.title}
                        </Link>
                    </h2>
                    <p>{post.content.substring(0, 100)}...</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
