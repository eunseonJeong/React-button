import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const alram = () =>{
    alert('안녕하세요')
  }
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}
    >
      <AppBlock>
        <ButtonGroup>
          <Button>BUTTON</Button>
          <Button onClick={alram} size="large">BUTTON</Button>
          <Button size="small">BUTTON</Button>
          <Button color="blue" outline>
            BUTTON
          </Button>        
        </ButtonGroup>

        <ButtonGroup>
          <Button color="gray">BUTTON</Button>
          <Button color="gray" size="large">BUTTON</Button>
          <Button color="gray" size="small">BUTTON</Button>
          <Button color="gray" outline>
            BUTTON
          </Button>  
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" >BUTTON</Button>
          <Button color="pink" size="large" >BUTTON</Button>
          <Button color="pink" size="small" >BUTTON</Button>
          <Button color="pink" outline>
            BUTTON
          </Button>  
        </ButtonGroup>

      </AppBlock>
    </ThemeProvider>
  );
}

export default App;