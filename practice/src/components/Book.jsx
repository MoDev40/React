import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { deleteBook } from '../store/features/bookSlice'
const Book = ({book}) => {
  const dispatch = useDispatch()
  return (
    <div className='my-8 bg-white shadow-sm rounded-sm p-4 w-52 space-y-4'>
      <img className='w-48  object-cover' src={book.img} alt={book.name + "  image"}/>
      <div className='flex flex-row justify-around  font-semibold text-sm border-b border-b-[#ccc]'>
          <span>{book.name}</span>
          <span>${book.price}</span>
      </div>
      <div className='flex flex-row justify-between p-2 '>
         <Link to={`/editbook/${book.id}`} className='btn py-1 px-2'>Edit</Link>
          <button onClick={()=>dispatch(deleteBook({bookId:book.id}))} className='btn py-1 px-2 hover:bg-red-500'>&times;</button>
      </div>
    </div>
  )
}

export default Book