const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const path = require('path');

const app = express();

app.use(cookieParser());
app.use(morgan ('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended: true }));
app.use(express.static(path.join(process.cwd(), '/MobApp/')));

app.get('*', (req, res) => {

  res.sendFile(path.join(process.cwd(), '/MobApp/index.html'));
});

app.listen(process.env.PORT || 3030, (err) => {
  console.log('Server listening on port 3030');
});
