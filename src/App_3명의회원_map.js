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
      {
        customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              // job={c.job}
            />
          );
        })
      }      
    </div>
  );
}

export default App;