const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const pages_dir = __dirname + '/public/';

app.get('/', (req, res) => res.sendFile(pages_dir + 'landing.html'));

app.get('/gallery', (req, res) => res.sendFile(pages_dir + 'gallery.html'));

app.listen(3200, () => console.log('app on port 3200'));