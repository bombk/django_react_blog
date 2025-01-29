import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/posts/${postId}/`)
            .then(response => response.json())
            .then(data => setPost(data));
    }, [postId]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-gray-600">By {post.author}</p>
            <p className="mt-4">{post.content}</p>
        </div>
    );
}

export default Post;
