import { Formik,ErrorMessage,Form,Field } from 'formik'
import { object,string} from 'yup'
import { createUser } from '../../features/users/userSlice'
import { useDispatch,useSelector } from 'react-redux'
import {toast ,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
const Signup = () => {

  const dispatch = useDispatch()
  const {users} = useSelector(store => store.users)
  const singUpScheme = object({
    userName:string().required("required"),
    userEamil:string().required("required").email("Email Here"),
    userPassword:string().required("required").min(4,"not Accept les than 4")
  })

  const submitHandle = (values)=>{
    const {userEamil} = values
    let existUser = users.filter( user => user.userEamil == userEamil )
    if(existUser.length > 0){
        toast.success("This User Already Taken",{
          theme:"dark",
          position:'top-center',
          pauseOnHover:false,
        })
    }
    else{
      dispatch(createUser(values))
      toast.success("User Created Login Now",{
        position:'top-center',
        pauseOnHover:false,
      })
      }
  }
  return (
    <div className='flex flex-col w-full items-center capitalize'>
        <div className='bg-[#fff] rounded shadow-sm   mt-4 md:mt-8 md:shadow-xl w-full md:w-[60%] lg:w-[40%] p-6'>
          <h1 className='font-black text-xl md:text-2xl text-center '>SingUp</h1>
                <Formik 
                initialValues={{
                  userName:"",
                  userEamil:"",
                  userPassword:""
                }}
                onSubmit={submitHandle}
                validationSchema={singUpScheme}
                >
                    <Form className='flex flex-col space-y-4 p-6  m-4'>
                        <Field className="px-3 py-2 border-[#ccc] border outline-none rounded w-full " type="text" name="userName" placeholder="Name"/>
                        <ErrorMessage name='userName'/>
                        <Field className="px-3 py-2 border-[#ccc] border outline-none rounded w-full " type="Email" name="userEamil" placeholder="Email"/>
                        <ErrorMessage name='userEamil'/>
                        <Field  className="px-3 py-2 border-[#ccc] border outline-none rounded w-full " type="password" name="userPassword" placeholder="Password"/>
                        <ErrorMessage name='userPassword'/>
                        <button type='submit' className='btn w-full  py-2 font-bold text-md'>Submit</button>
                    </Form>
                </Formik>
          <p className='text-center text-slate-600'>Already have an account <Link to="/login">Login</Link></p>
        </div>
      <ToastContainer 
      hideProgressBar={true}
      autoClose={100}
      />
    </div>
  )
}

export default Signup