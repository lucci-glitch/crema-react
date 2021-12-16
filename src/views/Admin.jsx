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
        console.log("Clicked button");
        scrape();
        //mockScrape();
    }

    async function scrape() {
        setLoading(true);
        setLabel("Scraping threads...");
        const responseTitle = await client.post("/forumthreads/scrape");
        console.log(responseTitle);
        setLabel("Scraping posts...");
        const response = await client.post("/assemble");
        console.log(response.data);
        console.log("Done");

        setLoading(false);
    }
     // function sleep(ms) {
     //    return new Promise((resolve) => setTimeout(resolve, ms));
     // }

     // async function mockScrape() {
     //    setLoading(true);
     //    setLabel("Scraping threads...");
     //    await sleep(5000);
     //    setLabel("Scraping posts...");
     //    await sleep(5000);
     //    setLoading(false);
     // }

    return (
        <main className="admin">
            {loading && <Loading label={label} />}
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
