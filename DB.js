const mysql=require('mysql2');

// Create a new pool instance with your database configuration
const pool = mysql.createPool({
  user: 'root',         // Replace with your database username
  host: 'localhost',            // Replace with your database host (e.g., localhost or an IP address)
  database: 'akashdb',     // Replace with your database name
  password: '', // Replace with your database password 
});

// Export the pool for use in other parts of your application
module.exports = pool.promise();
