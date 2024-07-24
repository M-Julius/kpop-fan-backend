const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const path = require('path');
const routes = require('./routes'); 
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', routes); 

// Sync database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

module.exports = app;
