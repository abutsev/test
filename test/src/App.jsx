import { useState } from "react";

import gogaLogo from "/photo.jpg";
import gogaLogo2 from "/photo2.jpg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={gogaLogo} className="goga" alt="goga Logo" />
      </div>
      <h3>
        Гога воспитывался, и жил вместе со своей бабушкой во время отсутствия его
        родителей, которые были в длительной командировке. Бабушка баловала
        внука и часто читала ему книги вслух, поэтому мальчик не хотел учиться
        читать самостоятельно. Каждый раз когда бабушка хотела его научить
        читать, он придумывал другие занятия. Гога отправился в первый класс так
        и не сумев научиться читать, в школе он также не хотел осваивать
        грамоту. Родители мальчика, вернувшись из командировки, обнаружили, что
        он совсем не способен читать самостоятельно. Они придумали действенный
        способ заставить сына научиться читать. Мама принесла интересную книгу и
        прочитала Гоге книгу только наполовину, остановившись на самом
        интересном месте. Мальчику ничего не оставалось, как выучиться чтению.
        После этого Гога полюбил чтение и прочел много других интересных книг...
      </h3>
      <div>
        <img src={gogaLogo2} className="goga" alt="goga Logo2" />
      </div>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
