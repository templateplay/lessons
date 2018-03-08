var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');
app.use(bodyParser.json());

//GET request
app.get('/', (req, res) => {
	//how to get header value
	console.log('user-agent ===> ', req.headers['user-agent']);

	//how to get query string value
	//http://localhost:3000?id=999&name=hello
	console.log('id ===> ', req.query['id']);
	console.log('name ===> ', req.query.name);
	res.send('Hello World 123');
});

//POST request
app.post('/user', (req, res) => {
	//postman
	console.log('===>> it works');

	//how to get data (request body)
	console.log('body ===> ', req.body);

	res.send('created a new user.');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))