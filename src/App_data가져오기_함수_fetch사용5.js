import React, {useState, useEffect} from 'react'

const App = () => {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        // fetch('/api/customers', {method: 'GET'})             
        // fetch('https://jsonplaceholder.typicode.com/customers', {method: 'GET'})
        // fetch('/api/customers', {method: 'GET', headers:{'Accept': 'application / json'}})        
        // fetch('/api/customers', {method: 'GET', headers:{'Accept': 'application/json'}})
        // fetch('/api/customers', {method: 'GET'}, {headers:{'Accept': 'application/json'}})            
        fetch('/api/customers', {method: 'GET'})        
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCustomers(data)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    customers.map(customer => 
                    // <li key={customer.id}>{customer.id}<br />{customer.title}<br /></li>
                    // <li key={customer.id}>{customer.id}<br />{customer.title}<br />{customer.body}<br /></li>                    
                    // <li key={customer.id}>{customer.id}<br />{customer.image}<br />{customer.name}<br />{customer.birthday}<br />{customer.gender}<br />{customer.job}<br /></li>
                    <li key={customer.id}>{customer.id}<br />{customer.image}<br />{customer.name}<br />{customer.birthday}<br />{customer.gender}<br />{customer.job}<br /></li>
                    )
                }
            </ul>
        </div>
    )
}

export default App;