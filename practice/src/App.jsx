import React, { useEffect } from 'react'
import {object,string,number} from 'yup'
import { useAddUserMutation,useFetchUsersQuery,useEditUserMutation,useDeleteUserMutation } from './store/features/userSlice'
import { ErrorMessage, Field, Form, Formik } from 'formik'
const App = () => {
  const {data} = useFetchUsersQuery()
  console.log(data);
  const bookSheme = object({
    name:string().required("required"),
    bio:string().required("required"),
    id:number().required("required")
  })
  const handdleSubmit = (values)=>{

  }
return (
  <div className='flex flex-col items-center p-12  space-y-5'>
  <h1 className='font-black text-stone-700 text-xl'>Add Book</h1>
  <Formik
  initialValues={{
    name:"",
    id:"",
    bio:"",
  }}
  validationSchema={bookSheme}
  onSubmit={handdleSubmit}
  >
    <Form className='flex flex-col w-70 space-y-2 p-6 bg-white shadow-sm rounded'>
      <Field className="p-2 outline-none border border-[#ccc] rounded" type="number" name="id" placeholder="User id"/>
      <ErrorMessage name='id'/>
      <Field className="p-2 outline-none border border-[#ccc] rounded" type="text" name="name" placeholder="User name"/>
      <ErrorMessage name='name'/>
      <Field className="p-2 outline-none border border-[#ccc] rounded" type="text" name="bio" placeholder="User bio"/>
      <ErrorMessage name='bio'/>
      <button type='submit' className=' bg-green-600 rounded p-2'>ADD</button>
    </Form>
  </Formik>
</div>
  )
}

export default App