import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Element/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Element () {
  return <h1>Hello React</h1>;
};
export default App;
