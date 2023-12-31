import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams,useNavigate} from 'react-router-dom'
import {object,string,number} from 'yup'
import { updateBook } from '../store/features/bookSlice';
const EditBook = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {books} = useSelector(store => store.books)
  const bookSheme = object({
    name:string().required("required"),
    author:string().required("required"),
    img:string().required("required"),
    price:number().required("required")
  })
  const existingBook = books.find(exist => exist.id == Number(id))
  console.log(existingBook); 
  const handdleSubmit = (values)=>{
    const book = {...values,id:id}
    dispatch(updateBook({bookId:id,replaceBook:book}))
    navigate("/")
  }
  return (
    <div className='flex flex-col items-center p-12  space-y-5'>
        <h1 className='font-black text-stone-700 text-xl'>Edit Book</h1>
        <Formik
        initialValues={{
          name:existingBook.name,
          author:existingBook.author,
          img:existingBook.img,
          price:existingBook.price
        }}
        validationSchema={bookSheme}
        onSubmit={handdleSubmit}
        >
          <Form className='flex flex-col w-66 space-y-2 p-6 bg-white shadow-sm rounded'>
            <Field className="formControll" type="text" name="name" placeholder="Book name"/>
            <ErrorMessage name='name'/>
            <Field className="formControll" type="text" name="author" placeholder="Book author"/>
            <ErrorMessage name='author'/>
            <Field className="formControll" type="text" name="img" placeholder="Book image"/>
            <ErrorMessage name='img'/>
            <Field className="formControll" type="number" name="price" placeholder="Book price"/>
            <ErrorMessage name='price'/>
            <button type='submit' className='btn p-2'>EDIT</button>
          </Form>
        </Formik>
    </div>
  )}

export default EditBook