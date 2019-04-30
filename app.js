const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

mongoose.Promise = global.Promise;

const mongoURI =
  'mongodb+srv://john123:john123@cluster0-lcurc.mongodb.net/test?retryWrites=true';

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected....'))
  .catch(err => console.log(err));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/api/dashboardApi'));
app.use('/', require('./routes/dashboard'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server started in port 3000');
});
