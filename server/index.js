const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

const UserModel = require("./models/User")
const PORT = 3001;
app.use(cors());
app.use(express.json());
app.post('/createUser',async(req,res)=>{
    const { userName, age, email} = req.body;
    const user = new UserModel({userName:userName, age:age, email:email})
    try {
        await user.save();
        res.send("Data Added Successfully");
    } catch (error) {
        console.log(error);
        res.send("Data not Added Successfully");
    }

})


mongoose.connect("mongodb+srv://zeshanfa:12911234@crud.fsxck.mongodb.net/crudOps?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

app.listen(PORT,() => console.log(`Server is running on post: http://localhost:${PORT}`));