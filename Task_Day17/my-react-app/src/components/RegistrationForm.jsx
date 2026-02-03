import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { registrationSchema } from '../validations/registrationSchema'
import "../style/form.css"

const RegistrationForm = () => {

    const {
        register,
        handleSubmit,    
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(registrationSchema),
        mode: "onChange",   //instant validation feedback
    });

    const onsubmit = (data) => {
    console.log("Form Data:", data);
    alert("Registration Successful!");
    reset();
  };
  
  


    return (
        <div className='form-container'>
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit(onsubmit)} noValidate>

                <div className='form-group'>
                    <label>Full Name</label>
                    <input type='text' {...register("name")} />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' {...register("email")} />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' {...register("password")} />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <div className='form-group'>
                    <label>Confirm Password</label>
                    <input type='password' {...register("confirmPassword")} />
                    {errors.confirmPassword && (<p className="error">{errors.confirmPassword.message}</p>)}
                </div>

                <button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? "submitting..." : "Register"}
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm;
