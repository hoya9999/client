import './App.css';
import Customer from './components/Customer';
import {Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
import { Component, useState } from 'react';
import { response } from 'express';

const customers = [
  // {
  //   id: 8571040,
  //   image: 'https://placeimg.com/64/64/1', //랜덤으로 이미지를 보여주는 웹사이트
  //   name: '김종욱',
  //   birthday: '961225',
  //   gender: '남자',
  //   job: '프로그래머'
  // },
  // {
  //   id: 8571041,
  //   image: 'https://placeimg.com/64/64/2', //랜덤으로 이미지를 보여주는 웹사이트
  //   name: '김한솔',
  //   birthday: '961222',
  //   gender: '여자',
  //   job: '대학원생'
  // },    
  // {
  //   id: 8571042,
  //   image: 'https://placeimg.com/64/64/3', //랜덤으로 이미지를 보여주는 웹사이트
  //   name: '정홍기',
  //   birthday: '950220',
  //   gender: '여자',
  //   job: '군인'
  // },        
  {
    "id": 8571040,
    "image":"https://placeimg.com/64/64/1", //랜덤으로 이미지를 보여주는 웹사이트
    "name":"김종욱",
    "birthday":"961225",
    "gender":"남자",
    "job":"프로그래머"
  },
  {
    "id": 8571041,
    "image":"https://placeimg.com/64/64/2", //랜덤으로 이미지를 보여주는 웹사이트
    "name":"김한솔",
    "birthday":"961222",
    "gender":"여자",
    "job":"대학원생"
  },    
  {
    "id": 8571042,
    "image":"https://placeimg.com/64/64/3", //랜덤으로 이미지를 보여주는 웹사이트
    "name":"정홍기",
    "birthday":"950220",
    "gender":"여자",
    "job":"군인"
  }  
];

// const [count, setCount] = useState(0);
// //componentDidMount, componentDidUpdate와 비슷하게 작동합니다.
// useEffect(() => {
// // 브라우저 API를 사용해서 document title을 업데이트 합니다.
//   document.title = `You clicked ${count} times`;
// });


class App extends Component {
  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res = this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () = {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>학 번</TableCell>
              <TableCell>사 진</TableCell>
              <TableCell>성 명</TableCell>
              <TableCell>생 년 월 일</TableCell>
              <TableCell>성 별</TableCell>
              <TableCell>직 업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            this.state.customers.map(c => { 
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
          </TableBody>
        </Table>
      </div>
    );
  }
}

// function App() {
//   const [customers, setCustomers] = useState("");

//   return (
//     <div>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>학 번</TableCell>
//             <TableCell>사 진</TableCell>
//             <TableCell>성 명</TableCell>
//             <TableCell>생 년 월 일</TableCell>
//             <TableCell>성 별</TableCell>
//             <TableCell>직 업</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//         {
//           customers.map(c => { 
//             return ( 
//               <Customer 
//                 key={c.id} 
//                 id={c.id} 
//                 image={c.image} 
//                 name={c.name} 
//                 birthday={c.birthday} 
//                 gender={c.gender} 
//                 job={c.job} /> 
//             );
//           })
//         }
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

export default App;