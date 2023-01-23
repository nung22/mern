import React from 'react';
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

export default function AuthorList(props) {
  const { removeFromDOM, authors } = props;

  return(
    <div className="overflow-x-auto">
      <h1 className='text-l font-semibold my-3'>We have quotes by:</h1>
      <table className="table w-96 text-center">
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
        {authors.map( (author, i) => 
        <tr key={i} className="hover">
          <th>
            {author.name}
          </th>
          <td className='flex justify-center gap-3'>
            <Link to={`/authors/${author._id}/edit`} className='btn btn-sm btn-outline btn-warning'>Edit</Link>
            <DeleteButton authorId={author._id} successCallback={() => removeFromDOM(author._id)}/>
          </td>
        </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}