import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const endpoint = 'http://127.0.0.1:8000/api/users'

const CreateForm = () => {

	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: "onBlur"
	});

	const handleRegistration = async (e) => {
		alert('SUCCESS!! :-)\n\n' + JSON.stringify(e, null, 4));
        e.preventDefault()
        await axios.post(endpoint, {
        	name: name, 
        	email: email, 
        	mobile: mobile,
        	age: age
        })
        navigate('/')
    };

	const handleError = (errors) => {};

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [age, setAge] = useState('');
    const navigate = useNavigate();

	const registerOptions = {
    	name: { required: "Name is required" },
    	email: { 
    		required: "Email is required",
    		pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
    	},
    	mobile: { required: "Mobile is required" },
    	age: { required: "Age is required" },
    	password: {
      		required: "Password is required",
      		minLength: {
        		value: 8,
        		message: "Password must have at least 8 characters"
      		}	
    	}
  	};

	return (
		<div>
        	<p>Por favor diligencia el siguiente formulario:</p>
	        <form onSubmit={handleSubmit(handleRegistration, handleError)}>

	            <div className='mb-3'>
	                <label className='form-label'>Nombre Completo : </label>
	                <input 
	                	value={name}
	                    onChange={ (e)=> setName(e.target.value)}
	                    type='text'
	                    className='form-control'
	                    {...register('name', registerOptions.name) }
	                />
	                <small className="text-danger">
          				{errors?.name && errors.name.message}
        			</small>
	            </div>

	            <div className='mb-3'>
	                <label className='form-label'>Email : </label>
	                <input 
	                	value=''
	                    onChange={ (e)=> setEmail(e.target.value)}
	                    type='email'
	                    className='form-control'
	                    {...register('email', registerOptions.email)}
	                />
	                <small className="text-danger">
          				{errors?.email && errors.email.message}
        			</small>
	            </div>

	            <div className='mb-3'>
	                <label className='form-label'>Celular : </label>
	                <input 
	                	value={mobile}
	                    onChange={ (e)=> setMobile(e.target.value)}
	                    type='number'
	                    className='form-control'
	                    {...register('mobile', registerOptions.mobile)}
	                />
	                <small className="text-danger">
          				{errors?.mobile && errors.mobile.message}
        			</small>
	            </div>

	            <div className='mb-3'>
	                <label className='form-label'>Edad : </label>
	                <input 
	                	value={age}
	                    onChange={ (e)=> setAge(e.target.value)}
	                    type='number'
	                    className='form-control'
	                    {...register('age', registerOptions.age)}
	                />
	                <small className="text-danger">
          				{errors?.age && errors.age.message}
        			</small>
	            </div>

	            <button type='submit' className='btn btn-primary'>Guardar</button>
	        </form>
    	</div>
	)
}

export default CreateForm