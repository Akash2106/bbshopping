const pool=require('../DB');

const Createuser = async(req,res)=>{
    try{
        const {username,password} = req.body;
        const[result]= await pool.query(`INSERT INTO userlogin(username,passward) VALUE("${username}","${password}")`);
        res.status(200).json(result);
    }
    catch(err){
        console.error(err);
        res.status(500).send('Error querying database');
    }
}

// const LoginCheck=async(req,res)=>{
//     try{
//         const {username,password} = req.body;
//         const [result]= await pool.query(`SELECT * FROM userlogin WHERE username="${username}" AND passward="${password}"`);
//         res.status(200).json(result);
//     }
//     catch(err){
//         console.error(err);
//         res.status(500).send('Error querying database');
//     }
// }

module.exports={Createuser};