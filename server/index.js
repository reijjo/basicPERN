const config = require('./config');
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
	res.send('<h1>Hi from the backkk..</h1>')
});

console.log(config.HIMOAPIKEY)

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`)
})