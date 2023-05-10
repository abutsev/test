import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> В моей жизни недавно произошёл пиздец, и сейчас я вынужден работать курьером яндекса и сбермаркета, позавчера бреду я по тротуару и меня пропускает чёрный внедорожник выезжающий со двора, потом он догоняет меня на светофоре, за рулем мужик, рядом с ним пацан лет 12, взади женщина, и он спрашивает у меня, работаешь в доставке?
Ну да, пешком? Да. А на велосипеде было бы удобнее? Конечно) Вы не поверите, они поехали и купили мне велосипед, я до сих пор в шоке, я если честно не знаю что с ним делать, ездить мне страшно, но и продать его мне стрёмно. Руслан и Магомед спасибо вам, ваш поступок возвращает веру в людей.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    
      </div>
   
    </>
  )
}

1
import { useState } from 'react'
2
import reactLogo from './assets/react.svg'
3
import viteLogo from '/vite.svg'
4
import './App.css'
5
​
6
function App() {
7
  const [count, setCount] = useState(0)
8
​
9
  return (
10
    <>
11
      <div>
12
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
13
          <img src={viteLogo} className="logo" alt="Vite logo" />
14
        </a>
15
        <a href="https://react.dev" target="_blank" rel="noreferrer">
16
          <img src={reactLogo} className="logo react" alt="React logo" />
17
        </a>
18
      </div>
19
      <h1>В моей жизни недавно произошёл пиздец, и сейчас я вынужден работать курьером яндекса и сбермаркета, позавчера бреду я по тротуару и меня пропускает чёрный внедорожник выезжающий со двора, потом он догоняет меня на светофоре, за рулем мужик, рядом с ним пацан лет 12, взади женщина, и он спрашивает у меня, работаешь в доставке?
20
Ну да, пешком? Да. А на велосипеде было бы удобнее? Конечно) Вы не поверите, они поехали и купили мне велосипед, я до сих пор в шоке, я если честно не знаю что с ним делать, ездить мне страшно, но и продать его мне стрёмно. Руслан и Магомед спасибо вам, ваш поступок возвращает веру в людей.</h1>
21
      <div className="card">
22
        <button onClick={() => setCount((count) => count + 1)}>
23
          count is {count}
24
        </button>
25
    
26
      </div>
27
   
28
    </>
29
  )
30
}
31
​
32
export default App
33
​

export default App
