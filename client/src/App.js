import { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [age,setAge]= useState(1);
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getUsers").then((response) => {
  //     setListOfUsers(response.data);
  //   });
  // }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      userName:name,
      age:age,
      email:email
     });
     //.then((response) => {
    //   setListOfUsers([
    //     ...listOfUsers,
    //     {
    //       name,
    //       age,
    //       username,
    //     },
    //   ]);
    // });
  };

  return (
    <div className="App">
     <h1>CRUD App with MongoDb</h1>

     <label>UserName</label>
     <input type="text" required onChange={(event)=>{setName(event.target.value)}}></input>
     <label>Email</label>
     <input type="email" required onChange={(event)=>{setEmail(event.target.value)}}></input>
     <label>Age</label>
     <input type="number" onChange={(event)=>{setAge(event.target.value)}}></input>
     <button onClick={createUser}>Add to Users</button>
    </div>
  );
}

export default App;
