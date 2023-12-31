import React from 'react'
import { Formik,ErrorMessage,Form,Field } from 'formik'
const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <span className='text-[#333333bb]'>-Contact Us</span>
        <div className='grid md:grid-cols-2  w-full md:my-6'>
            <div className='bg-[#0f4c0f73] '>

            </div>
            <div className='bg-[#fff]  shadow-sm w-full p-6'>
                <Formik >
                    <Form className='flex flex-col space-y-4 items-center'>
                        <Field className="px-3 py-2 border-[#ccc] border outline-none rounded w-full lg:w-[80%]" typ="text" name="userName" placeholder="Username"/>
                        <Field className="px-3 py-2 border-[#ccc] border outline-none rounded w-full lg:w-[80%]" typ="Emai" name="userEamil" placeholder="Email"/>
                        <Field className="px-3 py-2 border-[#ccc] border outline-none rounded w-full lg:w-[80%]" typ="text" name="userComment" placeholder="Comment"/>
                        <button type='submit' className='btn w-[80%] py-2 font-bold text-md'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    </div>
  )
}

export default Contact