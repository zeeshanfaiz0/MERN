const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const UserModel = require("./models/User");

const PORT = 3001;
app.use(cors());
app.use(express.json());
app.get("/readUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.post("/createUser", async (req, res) => {
  const { userName, age, email } = req.body;
  const user = new UserModel({ userName: userName, age: age, email: email });
  try {
    await user.save();
    res.send("Data Added Successfully");
  } catch (error) {
    console.log(error);
    res.send("Data not Added Successfully");
  }
});

app.put("/updateUser/:id", async (req, res) => {
  const {id} = req.params;
  const { userName, age, email } = req.body;
  try {
      await UserModel.updateOne({_id:id},{ userName: userName, age: age, email: email })
    res.send("Data Updated Successfully");
  } catch (error) {
    console.log(error);
    res.send("Data not Updated ");
  }
});


app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await UserModel.findByIdAndRemove(id).exec();
  res.send("User Deleted");
});

mongoose.connect("mongodb://localhost:27017/BlogApp",{ useNewUrlParser: true });

app.listen(PORT, () =>
  console.log(`Server is running on post: http://localhost:${PORT}`)
);
