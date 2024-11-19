const pool = require("../DB");


const GetAllproducts=async (req,res)=>{
    try{
        const [result] = await pool.query("SELECT * FROM products;");
        res.status(200).json(result);
      }
      catch(err){
        console.error(err);
        res.status(500).send("Error querying database");
      }
}
 
const GetProductById=async (req,res)=>{
    try {
        const userid=req.params.id;
        const [result] = await pool.query(`SELECT * FROM products where productId=${userid}`); 
        res.status(200).json(result);
      }
       catch (err) {
        console.error(err);
        res.status(500).send("Error querying database");
      }
}
const AddProduct=async (req,res)=>{
    try{
        const {tittle, price, category, description, image}= req.body
        const [result]= await pool.query(`INSERT INTO products(tittle, price, category, description, image) VALUES ("${tittle}",${price},"${category}","${description}","${image}")`);
        res.status(200).json(result);
      }
      catch (err){
        console.error(err);
        res.status(500).send("Error querying database");
      }
}

const UpdateProduct=async (req,res)=>{
  try{
    const {tittle, price, category, description,productId}=req.body;
    const[result]=await pool.query(`UPDATE products SET tittle="${tittle}",price=${price},category="${category}",description="${description}"WHERE productId=${productId}`);
    res.status(200).json(result);
  }
  catch(err){
    console.error(err);
    res.status(500).send("Error querying database");
  }
}
const DeleteProduct=async (req,res)=>{
  try{
    const productId=req.params.id;
    const[result]=await pool.query(`DELETE FROM products WHERE productId=${productId}`);
    res.status(200).json(result);
  }
  catch(err){
    console.error(err);
    res.status(500).send("Error querying database");
  }
}

const Sort=async (req, res)=>{
  try{
    const value = req.params.value;
    if(value=="pd"){
      const [result]=await pool.query(`SELECT * FROM test.products ORDER BY price DESC`);
      res.status(200).json(result);
    }
    else if(value=="pa"){
      const [result]=await pool.query(`SELECT * FROM test.products ORDER BY price ASC`);
      res.status(200).json(result);
    }
    else if(value=="new"){
      const [result]=await pool.query(`SELECT * FROM test.products ORDER BY productId DESC`);
      res.status(200).json(result);
    }
}

catch(err){
  console.error(err);
  res.status(500).send("Error querying database");
}
}

const types=async(req,res)=>{
  try{
    const [result]= await pool.query(`SELECT DISTINCT category FROM products`);
    res.status(200).json(result);
  }
  catch(err){
    console.error(err);
    res.status(500).send("Error querying database");
  }
}

const Categorys = async(req,res)=> {
  try{
    const category=req.params.id;
    const [result]=await pool.query(`SELECT * FROM products WHERE category="${category}"`);
    res.status(200).json(result);
  }
  catch(err){
    console.error(err);
    res.status(500).send("Error querying database");
  }
}


module.exports={GetAllproducts,GetProductById,AddProduct,UpdateProduct,DeleteProduct,Sort,Categorys,types};