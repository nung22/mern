const DisplayTasks = (props) => {
  return (
    <div className='flex flex-col gap-1 mt-4'>
      { props.tasks.map( (item,i) => 
          <div key={i} className="form-control">
            <label className="cursor-pointer label w-fit flex gap-3">
              <span className={`label-text text-lg ${item.completed ?'line-through':''}`}>{item.description}</span>
              <input type="checkbox" checked={item.completed} className="checkbox checkbox-warning"
              onChange={e => props.onTaskUpdate(i)}/>
              <button className="btn btn-circle btn-outline btn-error btn-xs"
              onClick={e => props.onTaskDelete(item)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </label>
          </div>
      ) }
    </div>
  );
}

export default DisplayTasks;