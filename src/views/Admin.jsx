import React, { useState } from "react";
import Loading from "../components/animations/Loading";

const axios = require("axios");

const client = axios.create({
    baseURL: "http://localhost:8080/crema-spring-0.0.1-SNAPSHOT/api",
});

const Admin = () => {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState("");

    async function handleClick() {
        scrape();
    }

    async function scrape() {
        setLoading(true);
        setLabel("Scraping threads...");
        const responseTitle = await client.post("/forumthreads/scrape");
        console.log(responseTitle.data)
        setLabel("Scraping posts...");
        const response = await client.post("/assemble");
        console.log(response.data);

        setLoading(false);
    }

    return (
        <main className="admin">
            {loading}
            <div className="container">
                <button
                    type="button"
                    onClick={() => {
                        handleClick();
                    }}>
                    Scrape
                </button>
                <Loading label={label} />
            </div>
        </main>
    );
};

export default Admin;
