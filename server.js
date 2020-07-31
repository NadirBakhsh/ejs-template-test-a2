const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
const app = express();

app.use(bodyParser())
app.use(cors())
app.use(expressLayouts)
app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/', function(req, res){
    res.render('obj1')
})




app.listen(process.env.PORT || 3000, function() {
    console.log('server is listening')
})
