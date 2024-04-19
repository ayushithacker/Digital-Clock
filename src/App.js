import {useState} from "react"
function App() {


  const [time, setTime] = useState(0)



  const  clock  = ()=>{
    let t = new Date()
    setTime(t.toLocaleTimeString());
  }
  

  setInterval(clock,1000)

  return (
    <div className="App">


      <h1>Digital clock</h1>
      <p>{time}</p>

    
    </div>
  );
}

export default App;
