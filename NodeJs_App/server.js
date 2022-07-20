const express = require('express');
const app = express();
const os = require('os');

app.get("/", (req, res) => {
    const message = `VERSION 2 : Hello, from ${os.hostname}`;
    console.log(message);
    res.send(message);
})

app.listen(3000, ()=>{
    console.log(`Server is listening at port 3000`);
})

