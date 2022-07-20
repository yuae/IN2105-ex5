// create server obj
const express = require('express');
const fs = require('fs');
const app = express();

//body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//static file dir
app.use(express.static(__dirname+'/res'))

//DB
//const db = require('./models');
const log = require('./data/log.yml')

//routes
//HTML Endpoints
app.get('/ui', function homepage(req, res) {
	res.sendFile(__dirname + '/views/index.html');
  });

//APIs endpoints
app.get('/', (req, res) => {
	res.json({
	  endpoints: [
		{method: 'POST', path: '/log', description: 'add new log'},
		{method: 'PUT', path: '/log', description: 'add new log'},
		{method: 'GET', path: '/ui', description: 'show visualization'}
	]
	})
});

//add new task
app.post('/log', (req, res) => {
	//debug info
	//console.log(req.headers)
	console.log('add');
	
	data = req.body;
	console.log(data);
	//create new task
	const nLog = {
		
	};
	var file = './data/log.yml';
	//var tasks = JSON.parse(fs.readFileSync(file).toString());
	//console.log(tasks);
	//logs.push(nTask);
	//fs.writeFileSync(file, log);
	res.send("Task "+req.body.id+" added");
	//list =JSON.parse(tasklist);
	//list.push(nTask)
	/*
	db.tasks.create(req.body, (err, nTask) => {
		if (err) throw err;
		res.send("New task added");
	});
	*/
});

//add new task
app.put('/log', (req, res) => {
	//debug info
	//console.log(req.headers)
	console.log('put');
	
	data = req.body;
	console.log(data);
	//create new task
	const nLog = {
		
	};
	var file = './data/log.yml';
	//var tasks = JSON.parse(fs.readFileSync(file).toString());
	//console.log(tasks);
	//logs.push(nTask);
	//fs.writeFileSync(file, log);
	res.send("Task "+req.body.id+" added");
	//list =JSON.parse(tasklist);
	//list.push(nTask)
	/*
	db.tasks.create(req.body, (err, nTask) => {
		if (err) throw err;
		res.send("New task added");
	});
	*/
});

//SERVER 
// listen on the port 
app.listen(process.env.PORT || 12345, () => {
	console.log('Express server is up and running on http://localhost:12345/');
  });