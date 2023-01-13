import './App.css';
import Customer from './components/Customer';
// import {Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
// import { Link, Outlet } from 'react-router';
import { useState, useEffect } from 'react';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/api/customers', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setCustomers(data)
    })
  },[])

  return (
    <div>
        {
          customers.map(c => { 
            return (
                <Customer 
                  key={c.id} 
                  id={c.id} 
                  image={c.image} 
                  name={c.name} 
                  birthday={c.birthday} 
                  gender={c.gender} 
                  job={c.job} />               
            );
          })
        }
    </div>
  );
}

export default App;