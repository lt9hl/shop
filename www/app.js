 var express =require('express'); 
var fs =require('fs'); 
var mysql =require('mysql2'); 

    const app = express();
    const PORT = process.env.PORT || 5000; 
// create the connection to database
// const connection = mysql.createConnection({
//   host: '127.0.0.1',    // или IP адрес сервера
//   port: 3306,           // стандартный порт MySQL
//   user: 'root',
//   password: 'root',
//   database: 'shop'
// });
// var result ;
  
    app.get('/', (req, res) => {
      const htmlFile = 'index.html';
  	fs.stat(`./${htmlFile}`, (err, stats) => {
  		if(stats) {
  			res.statusCode = 200;
  			res.setHeader('Content-Type', 'text/html');
		  	fs.createReadStream(htmlFile).pipe(res);
  		}
  	});
});



    app.get('/style.css', (req, res) => {
      const cssFile = 'style.css';
  	fs.stat(`./${cssFile}`, (err, stats) => {
  		if(stats) {
  			res.statusCode = 200;
  			res.setHeader('Content-Type', 'text/css');
		  	fs.createReadStream(cssFile).pipe(res);
  		}
  	});
  });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
 


// connection.query(
//   'SELECT * FROM Items',
//   function(err, results, fields) {
//     console.log(err);
//     result = results; // results contains rows returned by server
//   }
// );

// app.get("/items", (req, res) => {
//   connection.query('SELECT * FROM Items', (err, results) => {
//     if (err) {
//       console.error('Ошибка запроса:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }
    
//     // Проверяем, есть ли данные
//     if (!results || results.length === 0) {
//       return res.status(404).json({ message: 'No items found' });
//     }
    
//     // Отправляем данные в формате JSON
//     res.json(results);
//   });
  
// });


