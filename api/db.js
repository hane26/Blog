// creation of the database connection
import mysql from 'mysql';


export const db = mysql.createConnection({// create a connection to the database
    host: 'localhost',
    user: 'root',
    password: 'Oracle99.',//rayane123
    database : "blog"

});