const express = require('express');

const app = express();


const port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use(express.static('public'))

app.use(express.urlencoded({ extended:false }));

app.get('/deepwali-card/:name', async (req, res) => {
    res.render('index',{title:req.params.name,person:req.params.name});
})

app.listen(port, () => {
    console.log(`server running at ${port}`)
})