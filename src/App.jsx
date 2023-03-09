import React, { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input';
import styled, { ThemeProvider } from 'styled-components';

const ButtonGroup = styled.div`
    margin-top: 1rem;

    .
`;

function App() {

  const alarmAlert = () => {
    alert('버튼을 만들어봐!')
  }

  const [name,setName] = useState('');
  const [price,setPrice] = useState(0);

  const nameBtnHandelr = e => {
    setName(e.target.value);
  }

  const priceBtnHandelr = e => {
    setPrice(e.target.value);
  }

  const clickBtnHandelr = () =>{
    return alert(` ${name} 안녕하세요. ${price} 원 입니다.`);
  }

  return (
    <ThemeProvider
      theme={{
        palette: {
          green: '#32ff7e',
          pink: '#ffcccc',
          purple: '#cd84f1',
        }
      }}>

      <h3>Button</h3>
      <ButtonGroup>
        <Button onClick={alarmAlert} outline> 테두리1 </Button>
        <Button size="medium"> medium </Button>
        <Button size="small">small</Button>

        <br />
        <br />

        <Button color="pink" outline> 테두리2 </Button>
        <Button size="medium" color="pink"> medium </Button>
        <Button size="small" color="pink"> small </Button>
      </ButtonGroup>

      <h3>Input</h3>
      <ButtonGroup>
        이름
        <input type="text" 
        value={name} onChange={nameBtnHandelr}/>
        가격
        <input type="number" 
        value={price} onChange={priceBtnHandelr}/>
        <Button color="purple" onClick={clickBtnHandelr}>저장</Button>
      </ButtonGroup>

      <h3>Modal</h3>
      <ButtonGroup>
        <Button outline>open Modal</Button>
        <Button>open Modal</Button>
      </ButtonGroup>

      <h3>Select</h3>
      <li>자바스크립트</li>


    </ThemeProvider >
  )
}

export default App