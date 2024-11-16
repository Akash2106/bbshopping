const mysql=require('mysql2');

// Create a new pool instance with your database configuration
const pool = mysql.createPool({
  user: '2tzhgtK7527Pczp.root',         // Replace with your database username
  host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',            // Replace with your database host (e.g., localhost or an IP address)
  database: 'test',     // Replace with your database name
  password: 'CLFj4ZtC0s9Qmh9U', // Replace with your database password 
  port:4000
});

// Export the pool for use in other parts of your application
module.exports = pool.promise();
