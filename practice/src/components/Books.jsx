import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Book from './Book'
const Books = () => {
  const {books} = useSelector(store => store.books)
  return (
    <div className='w-full items-center place-items-center grid md:grid-cols-3'>
        {
            books.map( book => (
                <Book key={book.id} book={book}/>
            ))
        }
    </div>
  )
}

export default Books