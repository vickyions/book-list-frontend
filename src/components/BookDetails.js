import React, { useState } from "react";
import "./Login.css";
import BACKEND_URL from "../exports";
import { useLocation, useNavigate } from "react-router-dom";

export default function BookDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const deleteBook =()=> {};

  return (
    <div className="wrapper-login">
      <button
        className="btn regBtn"
        type="button"
        onClick={(e) => navigate("/books")}
      >
        Show Book List
      </button>
      <h1 className="heading">Book's Record</h1>
      <h2>View Book's Info</h2>
      <div className="login-form-wrapper">
        <button
          htmlFor="login-form"
          className="btn delBtn"
          type="button"
          onClick={deleteBook}
        >
          Delete Book
        </button>
        <button
          className="btn regBtn"
          type="button"
          onClick={(e) => navigate(`/books/${location.pathname.split("/")[2]}/edit`)}
        >
          Edit Book
        </button>
      </div>
    </div>
  );
}
