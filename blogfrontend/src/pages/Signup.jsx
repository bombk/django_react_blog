import { useState } from "react";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/api/signup/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            alert("Signup successful!");
        } else {
            alert("Signup failed");
        }
    };

    return (
        <form onSubmit={handleSignup} className="max-w-md mx-auto p-4 bg-white shadow-md">
            <h2 className="text-xl font-bold">Sign Up</h2>
            <input className="border p-2 w-full my-2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" className="border p-2 w-full my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Sign Up</button>
        </form>
    );
}
export default Signup;
