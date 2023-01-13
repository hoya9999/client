import './App.css';
import Customer from './components/Customer';
// import {Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
// import { Link, Outlet } from 'react-router';
import { useState, useEffect } from 'react';

// const customers = [
//   {
//     "id": 8571040,
//     "image":"https://placeimg.com/64/64/1", //랜덤으로 이미지를 보여주는 웹사이트
//     "name":"김종욱",
//     "birthday":"961225",
//     "gender":"남자",
//     "job":"프로그래머"
//   },
//   {
//     "id": 8571041,
//     "image":"https://placeimg.com/64/64/2", //랜덤으로 이미지를 보여주는 웹사이트
//     "name":"김한솔",
//     "birthday":"961222",
//     "gender":"여자",
//     "job":"대학원생"
//   },    
//   {
//     "id": 8571042,
//     "image":"https://placeimg.com/64/64/3", //랜덤으로 이미지를 보여주는 웹사이트
//     "name":"정홍기",
//     "birthday":"950220",
//     "gender":"여자",
//     "job":"군인"
//   }  
// ];

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => { // 2번)
    async function fetchData() {
      const result = await fetch("/api/customers"); // (이 주소에 100개의 데이터가 들어있을때)
      console.log(result);

      const toJson = await result.json(); // 3번) 이 값을 상태값으로 만든다 (컴포넌트가 렌더링될 때 날아가면 안되기 때문에) 
      console.log(toJson); // 결과가 100개의 데이터들

      setCustomers(toJson); // 5번)
    }

    fetchData(); // 6번) 반드시 함수를 호출해야만 async함수가 실행되는 것 잊지말기!
  }, []) 

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