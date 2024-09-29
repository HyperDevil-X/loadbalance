const express = require("express");
const app = express();

const PORT =  8000;
app.get("/", (request,response) => {
    return response.json (`Welcome to a new express server! ${process.pid}`); // process.pid is resolving the request
});

const start = async () =>{
    try {
        app.listen(PORT , () =>
        {
            console.log(`Server is running on port ${PORT}`);
        })}
        catch(error)
        {
            console.error(`Error starting server: ${error}`);
        }
}

start();