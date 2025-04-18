const express =require("express")
const router=express.Router()
// const date=require('../utils/getDate')
const db=require('../db')

router.get('/user-access-List',(req,res)=>{

console.log("User in the api")
const sql="SELECT * FROM useraccess"

db.query(sql,(err,results)=>{
    if (err) {
        return res.status(500).json({ error: "Database query failed" });
    }
    res.json({message:"User List",userList:results||[]})
})


})
router.post('/user-access ',(req,res)=>{
    // const updateDate=date

    const {user,permissons}=req.body;
    
    const sql=`INSERT INTO useraccess ("id",
"User",
"permissions",
"updatedate") VALUES (?,?,CURRENT_TIMESTAMP,NULL)`;

    
    db.query(sql, [user, permissons,], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed", details: err });
        }
        res.status(201).json({ message: "Leave request submitted successfully", requestId: result.insertId });
    });
    })
module.exports=router;