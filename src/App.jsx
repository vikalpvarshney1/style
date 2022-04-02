import React from 'react'
import './App.css';
import {Button} from './components/Button'
function App() {

  const [count , setcount] =React.useState(0);
  const [theme , settheme] =React.useState("dark");
  return (
    <div>
    <h1>
      {count}
    </h1>
    <Button theme={theme} onClick={() => setcount(count +1)}>INC</Button>
<Button theme={theme} onClick={() => setcount(count-1)}>DEC</Button>
    <br />
    <br /><br /><br />
    <button onClick={()=> settheme(theme=== "dark"? "light" : "dark" )}>toggle theme</button>
    
    </div>
  );
}

export default App;
