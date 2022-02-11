const express = require('express');
const mongoose = require('mongoose');
const app = express();

const UserModel = require("./models/User")
const PORT = 3000;
app.get('/',async(req,res)=>{
    const user = new UserModel({userName:"Zeeshan",age:23,email:"zeshan@gmail.com"})
    try {
        await user.save();
        res.send("Data Added Successfully");
    } catch (error) {
        console.log(error);
        res.send("Data not Added Successfully");
    }

})

app.use(express.json());

mongoose.connect("mongodb+srv://zeshanfa:12911234@crud.fsxck.mongodb.net/crudOps?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

app.listen(PORT,() => console.log(`Server is running on post: http://localhost:${PORT}`));