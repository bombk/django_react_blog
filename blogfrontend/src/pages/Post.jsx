// Post.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";

function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Fetch the post and increment views on the backend
        fetch(`${API_URL}/posts/${postId}/`)
            .then(response => response.json())
            .then(data => setPost(data));
    }, [postId]);

    if (!post) return <p className="text-center text-lg">Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-blue-600">{post.title}</h1>
            <p className="text-gray-600 text-lg">By {post.author}</p>

            {/* Image Section */}
            {post.image && (
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-96 object-cover rounded-lg mt-4 shadow-md"
                />
            )}

            {/* Content Section */}
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">{post.content}</p>

            {/* Views Section */}
            <p className="mt-6 text-sm text-gray-500">Views: {post.views}</p>
        </div>
    );
}

export default Post;
