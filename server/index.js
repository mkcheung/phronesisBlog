let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
 
let app = express();

const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
app.use(express.static(DIST_DIR));
app.use(bodyParser.json());


app.post('/signin', function(req, res) {
	let user_name=req.body.email;
	let password=req.body.password;
console.log(user_name);
console.log(password);
	if(user_name=='admin' && password=='admin'){
		res.send('success');
	} else{
		res.send('Failure');
	}
});

app.listen(7777,function(){
    console.log("Started listening on port", 7777);
});
