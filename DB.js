// Using `require` for consistency with Node.js environment
const mysql = require('mysql2');
const fs = require('fs');

// Connection configuration
const connectionConfig = {
  host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
  user: '2tzhgtK7527Pczp.root',
  password: 'CLFj4ZtC0s9Qmh9U',
  database: 'test',
  port: 4000,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync('./isrgrootx1.pem')  // Load the CA certificate from file
  }
};

// Create a new pool instance with your database configuration
const pool = mysql.createPool(connectionConfig);

// Export the pool for use in other parts of your application
module.exports = pool.promise();
