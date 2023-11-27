import {useFormik } from "formik";
import * as yup from 'yup'

const Formone=()=>{
    const formik = useFormik({
        initialValues:{
            name: '',
            email:'',
            password:''
        },
        validationSchema: yup.object({
            name:yup.string().max(20,'Name should not exceed 20 character ').required('Please enter your name'),
            email:yup.string().email('  Enter valid email address').required('Please enter a valid email'),
            password:yup.string().min(8,'minimum 8 character should be in').required('Please enter your password'),
           }),
           onSubmit:(values)=>{
            alert(JSON.stringify(values))
           },
    })
    return(
        <div className="border my-4 mx-auto max-w-sm rounded-xl p-4 bg-white">
            <h1 className="text-4xl text-center italic mb-3">login form</h1>
            <form onSubmit={formik.handleSubmit}>
                <input 
                 type='text'
                 name='name'
                 placeholder="enter your name"
                 className="border rounded block mb-4 w-full p-1"
                 {...formik.getFieldProps("name")}>
                </input>
                {formik.touched.name && <span className="text-red-600">{formik.errors.name}</span>}
                 
                
                <input  
                type="email"
                name="email"
                placeholder="email address"
                className="border rounded block mb-4 w-full p-1"
                {...formik.getFieldProps ("email")}
                />
                {formik.touched.email && <span classname="text-orange-700">{formik.errors.email}</span>}
                <input 
                type="password"
                name="password"
                placeholder="enter your password"
                className="border rounded mb-4 block w-full p-1"
                {...formik.getFieldProps ("password")}
                />
                {formik.touched.password &&  <span className="text-red-600">{formik.errors.password}</span>}
                <button className="border w-full mb-4 rounded p-1 bg-blue-600 hover:bg-blue-500 text-white">Submit</button>

            </form>
        </div>
    )
}
export default Formone;