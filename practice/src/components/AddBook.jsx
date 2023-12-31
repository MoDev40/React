import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { object,string,number} from 'yup'
import { useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addBook} from '../store/features/bookSlice'
const AddBook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {books} = useSelector(store => store.books)
  const bookSheme = object({
    name:string().required("required"),
    author:string().required("required"),
    img:string().required("required"),
    price:number().required("required")
  })
  const handdleSubmit = (values)=>{
    const book = {...values,id:books.length+1}
    dispatch(addBook({book:book}))
    navigate("/")

  }
  return (
    <div className='flex flex-col items-center p-12  space-y-5'>
        <h1 className='font-black text-stone-700 text-xl'>Add Book</h1>
        <Formik
        initialValues={{
          name:"",
          author:"",
          img:"",
          price:0
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
            <button type='submit' className='btn p-2'>ADD</button>
          </Form>
        </Formik>
    </div>
  )
}

export default AddBook