import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<Login/>}/>  
            <Route path="/register" element={<Register/>}/>  
            <Route path="/books" element={<BooksList/>}/>  
            <Route path="/books/new" element={<AddBook/>}/>  
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
