const express = require('express');
let app = express();
const port = process.env.PORT || 3000;

const pool = require('./DB');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.get('/products',async(req,res)=>{
//   try{
//     const [result] = await pool.query('SELECT * FROM products;');
//     res.status(200).json(result);
//   }
//   catch(err){
//     console.error(err);
//     res.status(500).send('Error querying database');
//   }
// });

app.get('/products/category', async (req,res) => {
  try{
    const [result] = await pool.execute(`SELECT DISTINCT category FROM products;`);
    res.status(200).json(result);
  }
  catch(err){
    console.error(err);
    res.status(500).send('Error querying database');
  }
  });
  // app.post('/products/add', async (req,res) =>{
  //   try{
  //     const {tittle, price, category, description, image}= req.body
  //     const [result]= await pool.query(`INSERT INTO products(tittle, price, category, description, image) VALUES ('${tittle}',${price},'${category}','${description}','${image}')`);
  //     res.status(200).json(result);
  //   }
  //   catch (err){
  //     console.error(err);
  //     res.status(500).send('Error querying database');
  //   }
  // });
  // app.post('/users/add', async (req,res) =>{
  //   try{
  //     const {name, age, number, city, state, pincode, address, gmail}= req.body
  //     const [result]= await pool.query(`INSERT INTO users(name, age, number, city, state, pincode, address, gmail) VALUES ('${name}','${age}','${number}','${city}','${state}',${pincode},'${address}','${gmail}')`);
  //     res.status(200).json(result);
  //   }
  //   catch (err){
  //     console.error(err);
  //     res.status(500).send('Error querying database');
  //   }
  // });
  // app.post('/cart/add', async (req,res) =>{
  //   try{
  //     const {userId, productId, quantity}= req.body
  //     const [out] = await pool.query(`SELECT price FROM products WHERE productId=${productId};`);
  //     const Total=(out[0].price)*quantity;
  //     const [result]= await pool.query(`INSERT INTO cart(userId, productId, quantity,TotalPrice) VALUES (${userId},${productId},${quantity},${Total})`);
  //     res.status(200).json(result);
  //   }
  //   catch (err){
  //     console.error(err);
  //     res.status(500).send('Error querying database');
  //   }
  // });

// app.get('/products/:id', async (req, res) => {
//   try {
//     let userid=req.params.id;
//     const [result] = await pool.query(`SELECT * FROM products where productId=${userid}`); 
//     res.status(200).json(result);
//   }
//    catch (err) {
//     console.error(err);
//     res.status(500).send('Error querying database');
//   }
// });
// app.get('/cart/:id',async(req,res)=>{
//   try{
//     const userId = req.params.id;
//     const [result] = await pool.query(`SELECT * FROM cart WHERE userId = ${userId}`);
//     res.status(200).json(result);
//   }
//   catch(err){
//     console.error(err);
//     res.status(500).send('Error querying database');
//   }
// });


const 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
