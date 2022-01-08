import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Allroutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
