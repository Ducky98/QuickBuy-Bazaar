const app = require(".");
const {connectDb} = require("./config/db");

const PORT = 5050;



app.get('/',(req,res)=>{
    return res.status(200).send({message:"Good"})
})









app.listen(PORT, async()=>{
    await connectDb();
    console.log("Server is active on PORT:", PORT);
})