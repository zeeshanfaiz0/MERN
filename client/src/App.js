import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(1);
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/readUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      userName: name,
      age: age,
      email: email,
    });
  };

  const updateUser = (id)=>{
    Axios.put(`http://localhost:3001/updateUser/${id}`, {
      userName: "Waniya",
      age: 6,
      email: "waniya@gmail.com",
    });
  }
  const deleteUser = (id)=>{
    Axios.delete(`http://localhost:3001/delete/${id}`)
  }
  return (
    <div className="App">
      <h1>CRUD App with MongoDb</h1>
      <label>UserName</label>
      <input
        type="text"
        required
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <label>Email</label>
      <input
        type="email"
        required
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>
      <label>Age</label>
      <input
        type="number"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      ></input>
      <button onClick={createUser}>Add to Users</button>

      <div>
        {listOfUsers.map((user) => {
          return (
            <div className="userDisplay">
              <label>User Name :</label>
              <h1> {user.userName}</h1>
              <label>Email :</label>
              <h1> {user.email}</h1>
              <label>Age :</label>
              <h1>{user.age}</h1>
              <button onClick={()=>{updateUser(user._id)}}>Update</button>
              <button onClick={()=>{deleteUser(user._id)}}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
