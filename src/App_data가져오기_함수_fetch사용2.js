import './App.css';
import Customer from './components/Customer';
// import {Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
// import { Link, Outlet } from 'react-router';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([{}]);
  const [error, setError] = useState(null);

  useEffect(() => {
    window
      .fetch('/api/customers')
      .then((res) => res.json())
      .then((customers) => {
        setCustomers(customers);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
        {console.log(`${customers}`)}
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