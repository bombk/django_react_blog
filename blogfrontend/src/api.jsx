const API_URL = "http://127.0.0.1:8000/api/posts/";

export async function getPosts() {
    const response = await fetch(API_URL);
    return response.json();
}
