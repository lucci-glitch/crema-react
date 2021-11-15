import React, { useEffect } from "react";
const axios = require('axios');


function Test() {
  let data
  useEffect(() => {
    axios.post('http://localhost:8080/api/quotes/scrape')
      .then(response => {
        // handle success
        this.data = response.data;

        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }, [])

  return (<div>

  </div>);
}

export default Test;