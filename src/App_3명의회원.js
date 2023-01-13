import './App.css';
import Customer from './components/Customer';

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

function App() {

  return (
    <div>
      <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />    
      <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      />  
    </div>
  );
}

export default App;