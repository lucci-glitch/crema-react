import React, { useEffect } from "react";
const axios = require('axios');

const client = axios.create({
    baseURL: "http://localhost:8080/api"
});

export default function GetTest() {
    const [post, setPost] = React.useState(null);

    useEffect(() => {
        async function getPost() {
            const response = await client.get("/quotes");
            setPost(response.data);
        console.log(response.data);
        }
        getPost();

    }, [])

    if (!post) return "No post!"

    return (
        <div>
                <ul>
                    {post.map(d => (<li key={d.id}>{d.text}</li>))}
                </ul>
        </div>
    );
}

