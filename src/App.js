import styled from 'styled-components'
import './app.css'
import { useState } from 'react'


const GlobalContainer = styled.div`
  width: 100vw;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  gap: 50px;
`

const FormContainer = styled.div`
  width: 90%;
  background-color: #ffff;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  gap: 10px;
  @media screen and (min-width: 800px) {
    width: 50%;
  }
  button{
    border-top: 20px;
    width: 60%;
    padding: 13px 33px;
    border-radius: 10px;
    color: #ffff;
    font-weight: bold;
    background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
    padding-top: 10px;
    padding-bottom: 20px;
    text-align: center;

  }
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 50px;
  h2{
    color: black;
  }
  p{
    font-size: 19px;
    color: red;
    font-weight: bold;
  }
`
const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: black;
  width: 100%;
  gap: 30px;
  flex-wrap: wrap;
  div{
    display: flex;
    flex-direction: row;
    gap: 10px;

  }
  input{
    width: 100px;
    border-bottom: 2px solid red;
  }
`
const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(235, 233, 233);
  border-radius: 10px;
  display: flex;
  margin-top: 10px;
  div{
    width: 100%;
    padding: 3%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

`

function App() {
  const [result, setResult] = useState(false)
  const [a, setA] = useState()
  const [b, setB] = useState()
  const [c, setC] = useState()
  return (
    <GlobalContainer>
      <div class="header">
        <div class="inner-header flex">
          <ContentContainer>
                <h1>CALCULADORA EQUAÇÃO 2º GRAU</h1>
                <FormContainer>
                  <TitleContainer>
                      <h2>FORMÚLA DE BHASKARA</h2>
                  </TitleContainer>
                  <InputsContainer>
                    <div>
                      <p>A:</p>
                      <input id='input-a' placeholder='A' type={'number'}/>
                    </div>
                    <div>
                      <p>B:</p>
                      <input id='input-b' placeholder='B' type={'number'}/>
                    </div>
                    <div>
                      <p>C:</p>
                      <input id='input-c' placeholder='C' type={'number'}/>
                    </div>

                  </InputsContainer>
                  <button onClick={()=>{
                    setResult(false)
                    setA(document.getElementById('input-a').value)
                    setB(document.getElementById('input-b').value)
                    setC(document.getElementById('input-c').value)
                    setResult(true)
                  }}>Confirm</button>
                  <ResultContainer>
                    <div>
                        { result ?
                          <>
                            <p style={{fontWeight: 'bold'}}>Result</p>
                            <p style={{color: 'black', fontWeight: 'bold'}}>{`x = (-b ±√b²-4*a*c)/2*a`}</p>
                            <p style={{color: 'black', fontWeight: 'bold'}}>{`x = (${-b} ±√${b}²-4*${a}*${c})/2*${a}`}</p>
                            <p style={{color: 'black', fontWeight: 'bold'}}>{`x = (${-b} ±√${b}²`}{-4*a*c > 0 ? `+${-4*a*c})/${2*a}` : `${-4*a*c})/${2*a}`}</p>
                            <p style={{color: 'black', fontWeight: 'bold'}}>{`x = (${-b} ±√${b*b}`}{-4*a*c > 0 ? `+${-4*a*c})/${2*a}` : `${-4*a*c})/${2*a}`}</p>
                            <p style={{color: 'black', fontWeight: 'bold'}}>{`x = (${-b} ±√${(b*b)-4*a*c})/${2*a}`}</p>
                            {
                              (b*b)-4*a*c < 0 ?
                              <p style={{color: 'black', fontWeight: 'bold'}}>Não existe raiz real, delta negativo</p>
                              :
                              (Math.sqrt((b*b)-4*a*c) % 1 ===0 ?
                                <>
                                  <p style={{color: 'black', fontWeight: 'bold'}}>{`x = (${-b} ±√${Math.sqrt((b*b)-4*a*c)})/${2*a}`}</p>
                                  <p style={{color: 'black', fontWeight: 'bold'}}>{`x1 = ${-b + Math.sqrt((b*b)-4*a*c)}/${2*a}`}</p>
                                  <p style={{color: 'black', fontWeight: 'bold'}}>{`x1 = ${(-b + Math.sqrt((b*b)-4*a*c)) / 2*a}`}</p>
                                  <p style={{color: 'black', fontWeight: 'bold'}}>{`x2 = ${-b - Math.sqrt((b*b)-4*a*c)}/${2*a}`}</p>
                                  <p style={{color: 'black', fontWeight: 'bold'}}>{`x2 = ${(-b - Math.sqrt((b*b)-4*a*c)) / 2*a}`}</p>
                                </>
                                :
                                <p style={{color: 'black', fontWeight: 'bold'}}>Não possui raiz inteira</p>)
                            }
                          </>
                          :
                          <></>
                        }
                    </div>
                  </ResultContainer>
                </FormContainer>
          </ContentContainer>
      </div>
      <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      </div>
      <div class="content flex">
        <p style={{fontWeight: 'bold'}}>Developed by Pedro Munhoz | Free to use </p>
      </div>
    </GlobalContainer>
  );
}

export default App;
