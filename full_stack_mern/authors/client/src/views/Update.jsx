import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";

export default function Update() {
  const { id } = useParams();
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch( (err) => {
        navigate('/errors')
        console.log(err)
      });
    }, [id]);
    
    const updateAuthor = author => {
      axios
      .put(`http://localhost:8000/api/authors/${id}`, author)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
      });
    };

  return (
    <div>
      {errors.map((err, index) => 
      <p className="text-white bg-red-500 px-3 py-1 rounded-lg mb-2 text-xs" key={index}>{err}</p>
      )}
      {loaded && (
        <AuthorForm
          onSubmitProp={updateAuthor}
          initialName={author.name}
          formName="Edit this author"
        />
      )}
    </div>
  );
};