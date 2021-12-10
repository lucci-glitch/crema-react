import React from 'react';

const axios = require("axios");

const client = axios.create({
    baseURL: "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api",
});

const Admin = () => {
    
    async function handleClick () {
        console.log("Clicked button")
        scrape();
    };

    async function scrape() {
        console.log("Scrape threads")
        const responseTitle = await client.post("/forumthreads/scrape");
        console.log(responseTitle);
        console.log("Scrape assemble")
        const response = await client.post("/assemble");
        console.log(response.data);
        console.log("Done")
    }

    return (
        <main className="admin">
            <h1>Admin Page</h1>
            <div className='container'>
                <button
                    type="button"
                    onClick={() => {
                        handleClick();
                    }}
                >
                    Scrape
                </button>
            </div>
        </main>
    );
};

export default Admin;