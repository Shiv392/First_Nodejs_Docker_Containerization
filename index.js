const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res)=>{
    return res.status(200).json({
        success : true,
        message : 'First Node.js Docker Containerization Project Running'
    })
});

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});