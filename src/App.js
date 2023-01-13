import './App.css';
import Loadingscreen from './Pages/Loadingscreen';
import Home from './Pages/Home';
import React, { useState } from "react";

function App() {


  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 10000)
  return (
    
    <div className="App">
<>
{loading ? <Loadingscreen/> : <Home/> }
</>
     
    </div>
  );
}

export default App;
