const express = require("express");
const app = express();
var morgan = require('morgan');
const layout = require('./views/layout')
const public = express.static('./public');
const { db, Page, User } = require('./models');

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

//app.use(public);

// parses url-encoded bodies
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(public);
app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

// parses json bodies
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get('/', (req, res)=> {
    res.redirect('/wiki')
})

const PORT = 3000;

const init = async () => {
  await db.sync({force: true});
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();
