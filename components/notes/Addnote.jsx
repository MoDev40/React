import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import { object,string } from 'yup'
import { Link } from 'react-router-dom'
const Addnote = () => {
    const notesSheme = object({
        name:string().required("required"),
        content:string().required("required")
      })
    const submitHandle = (values)=>{
        toast.success("In valid user",{
            position:'top-center',
            pauseOnHover:false,
          })

      }
  return (
    <div className='flex flex-col w-full items-center capitalize'>
    <div className='bg-[#fff] rounded shadow-sm   mt-4 md:mt-8 md:shadow-xl w-full md:w-[60%] lg:w-[40%] p-6'>
      <h1 className='font-black text-xl md:text-2xl text-center '>notes</h1>
            <Formik 
            initialValues={{
              name:"",
              content:""
            }}
            onSubmit={submitHandle}
            validationSchema={notesSheme}
            >
                <Form className='flex flex-col space-y-4 p-6  m-4'>
                    <Field className="px-3 py-2 border-[#ccc] border outline-none rounded w-full " type="text" name="name" placeholder="Name"/>
                    <ErrorMessage name='name'/>
                    <Field  className="px-3 py-2 border-[#ccc] border outline-none rounded w-full " type="text" name="content" placeholder="Content"/>
                    <ErrorMessage name='content'/>
                    <button type='submit' className='btn w-full  py-2 font-bold text-md'>Submit</button>
                </Form>
            </Formik>
    </div>
  <ToastContainer 
  hideProgressBar={true}
  autoClose={100}
  />
</div>
  )
}

export default Addnote