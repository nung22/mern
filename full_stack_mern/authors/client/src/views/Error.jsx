
import { Link } from 'react-router-dom'


export default function Error() {

  return (
    <div className='text-center'>
      <h1 className='font-semibold mb-5'>We're sorry, but we could not find the author you are looking for.<br/>
      Would you like to add this author to our database?</h1>
      <Link to={`/authors/new`} className='link link-info'>Add Author</Link>
    </div>
  );
}

