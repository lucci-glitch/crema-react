import React, { useState } from "react";
import Loading from "../components/Loading";

const axios = require("axios");

const client = axios.create({
    baseURL: "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api",
});

const Admin = () => {
    const [loading, setLoading] = useState(false);

    async function handleClick() {
        console.log("Clicked button");
        scrape();
    }

    async function scrape() {
        setLoading(true);

        console.log("Scrape threads");
        const responseTitle = await client.post("/forumthreads/scrape");
        console.log(responseTitle);
        console.log("Scrape assemble");
        const response = await client.post("/assemble");
        console.log(response.data);
        console.log("Done");

        setLoading(false);
    }

    return (
        <main className="admin">
            {loading && <Loading />}
            <h1>Admin Page</h1>
            <div className="container">
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
