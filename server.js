const express = require("express");
const cluster = require("node:cluster");
const os = require('os');

const totalCPUs = os.cpus().length;

// console.log( totalCPUs);

if(cluster.isPrimary)
{
    for(let i = 0; i < totalCPUs; i++)
    {
        cluster.fork();
    }
}else {
    const app = express();
    const PORT =  8000;

    app.get("/", (request,response) => {
        return response.json (`Load Balance in node! and its process pid is: ${process.pid}`); // process.pid is resolving the request
    });

    app.listen(PORT , () =>
        {
            console.log(`Server is running on port ${PORT}`);
        })
}