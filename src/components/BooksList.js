import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BACKEND_URL from "../exports";

export default function BooksList(props) {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("book-token")) {
      return navigate("/");
    }
    
    fetch(`${BACKEND_URL}/books`, {
      method:"GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("book-token")}`
      }
    }).then(res => res.json()).then(data => {
      console.log(data);
      if (data.message === "this is a protected route provide token") {
        return navigate("/");
      }
      if (data.status === "failed") {
        return window.alert("data.message");
      }
      if (data.status === "sucess") {
        setBooks(data.books);
      }
    });

  }, [navigate]);

  return (
      <h1>BooksList</h1>
  );
}
