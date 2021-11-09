import React, { useEffect } from "react";
const axios = require('axios');


function Test() {

  useEffect(() => {
    axios.get('http://localhost:8080/hello')
      .then(response => {
        // handle success
        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }, [])

  return null;
}

export default Test;