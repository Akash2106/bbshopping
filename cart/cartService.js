const pool=require('../DB');

const AddCart= async(req,res)=>{
    try{
        const {userId, productId, quantity}= req.body
        const [out] = await pool.query(`SELECT price FROM products WHERE productId=${productId};`);
        const Total=(out[0].price)*quantity;
        const [result]= await pool.query(`INSERT INTO cart(userId, productId, quantity,TotalPrice) VALUES (${userId},${productId},${quantity},${Total})`);
        const count=await pool.query(`SELECT COUNT(productId) AS TotalCount FROM cart WHERE userId=${userId}`);
        const response={
          message:'Cart item added successfully',
          status:1,
          count:count[0]
        }
        res.status(200).json(response);
      }
      catch (err){
        console.error(err);
        res.status(500).send('Error querying database');
      }
}

const ViewCart= async(req,res)=>{
    try{
        const userId = req.params.id;
        const [result] = await pool.query(`SELECT * FROM cart RIGHT JOIN products ON cart.productId=products.productId WHERE test.cart.userId=${userId}`);
        const count=await pool.query(`SELECT COUNT(productId) AS TotalCount FROM cart WHERE userId=${userId}`);
        const response={
          message:'Cart item fetched successfully',
          status:1,
          products:result,
          count:count[0]
        }
        res.status(200).json(response);
      }
      catch(err){
        console.error(err);
        res.status(500).send('Error querying database');
      }
}

const UpdateCart= async(req,res)=>{
  try{
    const {userId,productId,quantity}= req.body;
    if(quantity==0){
      const [result]=await pool.query(`DELETE FROM cart WHERE userId =${userId} AND productId=${productId}`);
      const count=await pool.query(`SELECT COUNT(productId) AS TotalCount FROM cart WHERE userId=${userId}`);
      const response={
        message:'Cart item removed successfully',
        status:1,
        count:count[0]
      }
      res.status(200).json(response);
    }
    else{
      const [out] = await pool.query(`SELECT price FROM products WHERE productId=${productId};`);
      const Total=(out[0].price)*quantity;
      const [result]=await pool.query(`UPDATE cart SET quantity =${quantity},TotalPrice=${Total} WHERE userId =${userId} AND productId=${productId}`);
      res.status(200).json(result);
    }

  }
  catch(err){
    console.error(err);
    res.status(500).send('Error querying database');
  }
}

const RemoveCart= async (req,res)=>{
  try{
    const userId=req.params.id;
    const [result]=await pool.query(`DELETE FROM cart WHERE userId =${userId}`);
    res.status(200).json(result);
  }

  catch(err){
    console.error(err);
    res.status(500).send('Error querying database');
  }
}
module.exports={AddCart,ViewCart,UpdateCart,RemoveCart};