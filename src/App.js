import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React, { useEffect } from "react";

function App() {
  const friends = ['atik', 'masud', 'saikot', 'rokon', 'Ashik']
  const products = [
    { name: 'umbrella', price: 230 },
    { name: 'headphone', price: 1000 },
    { name: 'portable Fan', price: 400 },
    { name: 'Speaker', price: 800 }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Users> </Users>
        <Counter></Counter>
        <h2 style={{ color: 'yellow' }}>Creating react Component</h2>
        <ul>
          {
            friends.map(nam => <li>{nam}</li>)
          }
        </ul>
        {products.map(details => <pro>{details.name}</pro>)}
        <Profile name="Md. Jahidul Islam" profession="Web-Developer"></Profile>
        <Profile name="Mst. Sabrina Min" profession="Doctor"></Profile>
        <Profile name="Md. Masud Rana" profession="Busnessman"></Profile>
        <Profile name="Md. Rizvi Ahamed" profession="Public Service"></Profile>

      </header>
    </div>
  );
}


function Profile(props) {
  const profileStyle = { color: 'green', border: '5px solid white', borderRadius: '20px', margin: '10px', padding: '50px' };
  return (
    <div style={profileStyle}>
      <h2>{props.name}</h2>
      <h3> {props.profession} </h3>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <br />
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Users (){
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => setUser(data))
  }, [ ]);
  
  return(
    <div>
      <h2>User Information:{users.length}</h2>
      <ol>
        {
        users.map(user => <li>{user.name}</li>)
        }
      </ol>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div> 
  )
}
export default App;
