import React from "react";
import axios from "axios";

export default function DeleteButton(props) {
  const { authorId, successCallback } = props;

  const deleteAuthor = (e) => {
    axios
      .delete(`http://localhost:8000/api/authors/${authorId}`)
      .then((res) => {
        successCallback();
      });
  };

  return (
    <button className="btn btn-outline btn-error btn-sm" onClick={(e) => deleteAuthor(authorId)}>
      Delete
    </button>
  );
}
