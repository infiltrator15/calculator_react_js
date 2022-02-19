import React, {useEffect, useState} from 'react';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(parseInt(a) + parseInt(b));
  }, [a, b]);
  return (
    <div className="container my-5">
    <div className="card text-center my-5">
      <div className="card-body">
         <h1>Calculator App</h1>
         <div className="my-5">
           <h2 className="my-5">Calculator</h2>
           <input type="number" class="mx-3" value={a} onChange={(event) => {setA(event.target.value);}}/>
           <input type="number" value={b} onChange={(event) => {setB(event.target.value);}}/>
           <button className="mx-3 btn btn-danger"onClick={() => setSum(0)}>Reset</button>

           <div className="my-5 text-center">{sum}</div>
         </div>
      </div>
    </div>

   </div>
  );
}

export default App;
