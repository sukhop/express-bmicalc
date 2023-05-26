const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/bmicalc.html");
})

app.post('/', (req, res) => {

    let height = Number(req.body.height);
    let weight = Number(req.body.weight);
    let bmi = weight / (height * height);

    if(height == (null || 0) || weight == (null || 0)) {
        res.redirect(req.get('referer'));
    } else {
        res.send("Your BMI is " + bmi.toFixed(1));
    }

})

app.listen(1000, "127.0.0.1", ()=> {
    console.log("Port: 1000");
})