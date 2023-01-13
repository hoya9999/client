import './App.css';
import Customer from './components/Customer';
import {Paper} from '@mui/material';
import {Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
// import {styled} from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import React from 'react';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto'
//   },
//   table: {
//     minWith: 1080
//   }
// })

const customers = [
  {
    id: 8571040,
    image: 'https://placeimg.com/64/64/1', //랜덤으로 이미지를 보여주는 웹사이트
    name: '김종욱',
    birthday: '961225',
    gender: '남자',
    job: '프로그래머'
  },
  {
    id: 8571041,
    image: 'https://placeimg.com/64/64/2', //랜덤으로 이미지를 보여주는 웹사이트
    name: '김한솔',
    birthday: '961222',
    gender: '여자',
    job: '대학원생'
  },    
  {
    id: 8571042,
    image: 'https://placeimg.com/64/64/3', //랜덤으로 이미지를 보여주는 웹사이트
    name: '정홍기',
    birthday: '950220',
    gender: '여자',
    job: '군인'
  },        
];

// function App() {
class App extends React.Component {

  render() {
    const { classes } = this.styles;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;