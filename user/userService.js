const pool = require('../DB');

const AddUser = async (req,res)=>{
    try{
        const {name, age, number, city, state, pincode, address, gmail}= req.body
        const [result]= await pool.query(`INSERT INTO users(name, age, number, city, state, pincode, address, gmail) VALUES ('${name}','${age}','${number}','${city}','${state}',${pincode},'${address}','${gmail}')`);
        res.status(200).json(result);
      }
      catch (err){
        console.error(err);
        res.status(500).send('Error querying database');
      }
}

const GetUserById=async (req,res)=>{
  try{
    const userId=req.params.id;
    const [result] = await pool.query(`SELECT * FROM users where userId=${userId}`); 
    res.status(200).json(result);
  }
  catch(err){
    console.error(err);
    res.status(500).send('Error querying database');
  }
}

const UpdateUser=async (req,res)=>{
  try{
    const userId=req.params.id;
    const {name, age, number, city, state, pincode, address, gmail}= req.body
    const [result]= await pool.query(`UPDATE users SET name='${name}', age='${age}', number='${number}', city='${city}', state='${state}', pincode=${pincode}, address='${address}', gmail='${gmail}' WHERE userId=${userId}`);
    res.status(200).json(result);
  }
  catch(err){
    console.error(err);
    res.status(500).send('Error querying database');
  }
}

module.exports={AddUser,GetUserById};