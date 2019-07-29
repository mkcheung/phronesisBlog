const config = require("config");
const mongoose = require("mongoose");
const usersRoute = require("../routes/user.route");

let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
 
let app = express();

const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/phronesisBlog", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.static(DIST_DIR));
app.use(bodyParser.json());


app.post('/signin', function(req, res) {
	let user_name=req.body.email;
	let password=req.body.password;

	console.log('inside body parser method');
	if(user_name=='admin' && password=='admin'){
		res.send('success');
	} else{
		res.send('Failure');
	}
});

app.listen(7777,function(){
    console.log("Started listening on port", 7777);
});
