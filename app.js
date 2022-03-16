const express = require('express');
const app = express();
app.use(express.static('public'))

//_______________________________________________________________________
const port = process.env.PORT || 3000;
console.log(`Server Started on port: ${port}`);
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(port);