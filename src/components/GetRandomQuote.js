import React, { useEffect } from "react";
const axios = require('axios');

const client = axios.create({
    baseURL: "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api"
});

export default function GetRandomQuote() {
    const [post, setPost] = React.useState(null);

    useEffect(() => {
        async function getPost() {
            const response = await client.get("/quotes/find",{ params: { text: "ja" } });
            setPost(response.data);
            console.log(response.data);
        }
        getPost();

    }, [])

    if (!post) return "No post!"

    return (
        <div>
            <ul>
                {post.text}
            </ul>
        </div>
    );
}

