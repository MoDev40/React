import { Formik,ErrorMessage,Form,Field } from 'formik'
import { object,string} from 'yup'
import { logInUser } from '../../features/users/userSlice'
import { useDispatch,useSelector } from 'react-redux'
import {toast ,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {users} = useSelector(store => store.users)
  const singUpScheme = object({
    userEamil:string().required("required").email("email Here"),
    userPassword:string().required("required").min(4,"not Accept les than 4")
  })

  const submitHandle = (values)=>{
    const {userPassword,userEamil,userName} = values
    let userLog = users.find( user => user.userEamil === userEamil && user.userPassword === userPassword)
    if(userLog){
      dispatch(logInUser(userLog))
      navigate("/")
    }
    else{
      toast.success("In valid user",{
        position:'top-center',
        pauseOnHover:false,
      })
      }
  }
  return (
    <div className='flex flex-col w-full items-center capitalize'>
        <div className='bg-[#fff] rounded shadow-sm   mt-4 md:mt-8 md:shadow-xl w-full md:w-[60%] lg:w-[40%] p-6'>
          <h1 className='font-black text-xl md:text-2xl text-center '>Login</h1>
                <Formik 
                initialValues={{
                  userEamil:"",
                  userPassword:""
                }}
                onSubmit={submitHandle}
                validationSchema={singUpScheme}
                >
                    <Form className='flex flex-col space-y-4 p-6  m-4'>
                        <Field className="px-3 py-2 border-[#ccc] border outline-none rounded w-full " type="Email" name="userEamil" placeholder="Email"/>
                        <ErrorMessage name='userEamil'/>
                        <Field  className="px-3 py-2 border-[#ccc] border outline-none rounded w-full " type="password" name="userPassword" placeholder="Password"/>
                        <ErrorMessage name='userPassword'/>
                        <button type='submit' className='btn w-full  py-2 font-bold text-md'>Submit</button>
                    </Form>
                </Formik>
          <p className='text-center text-slate-600'>don't have account? <Link to="/login">Create One</Link></p>
        </div>
      <ToastContainer 
      hideProgressBar={true}
      autoClose={100}
      />
    </div>
  )
}

export default Login