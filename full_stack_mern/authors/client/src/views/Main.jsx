import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthorList from "../components/AuthorList";
import { Link } from 'react-router-dom'


export default function Main() {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // function to compare author names & sort by alphabetical order
  const compareName = (a, b) => {
    return a.name < b.name
      ? -1
      : 1;
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data.sort(compareName));
        console.log('New List')
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [loaded]);

  const removeFromDOM = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };

  return (
    <div>
      <Link to={`/authors/new`} className='btn btn-sm btn-accent'>Add Author</Link>
      {loaded && (
        <AuthorList authors={authors} removeFromDOM={removeFromDOM} />
      )}
    </div>
  );
}
