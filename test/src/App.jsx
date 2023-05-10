import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gogaLogo from '/photo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

          <img src={gogaLogo} className="" alt="goga Logo" />
       
      </div>
      <h1>В моей жизни недавно произошёл пиздец, и сейчас я вынужден работать курьером яндекса и сбермаркета, позавчера бреду я по тротуару и меня пропускает чёрный внедорожник выезжающий со двора, потом он догоняет меня на светофоре, за рулем мужик, рядом с ним пацан лет 12, взади женщина, и он спрашивает у меня, работаешь в доставке?
Ну да, пешком? Да. А на велосипеде было бы удобнее? Конечно) Вы не поверите, они поехали и купили мне велосипед, я до сих пор в шоке, я если честно не знаю что с ним делать, ездить мне страшно, но и продать его мне стрёмно. Руслан и Магомед спасибо вам, ваш поступок возвращает веру в людей.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
