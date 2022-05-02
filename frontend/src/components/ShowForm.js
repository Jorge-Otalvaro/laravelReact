import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import $ from 'jquery'


const endpoint = 'https://ekoom.herokuapp.com/api/users';

const ShowForm = () => {
	/*Estado para mostrar u ocultar*/
  	const [mostrarComponente, setMostrarComponente] = useState(true);

  	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [age, setAge] = useState('');

	const [validationError,setValidationError] = useState({})	

	const handleRegistration = async (e) => {
        e.preventDefault()

        await axios.post(endpoint, {
        	name: name, 
        	email: email, 
        	mobile: mobile,
        	age: age
        }).then(response => {

        	Swal.fire({
	        	icon:"success",
	        	text:response.message
	      	})

	      	setName('');
	      	setEmail('');
	      	setMobile('');
	      	setAge('');
	      	window.location.reload(true);

        }).catch (error => {
            // console.log("Mensaje de error", error);
            if(error.response.status==422){
        		setValidationError(error.response.data.errors)
      		}else{
		        Swal.fire({
		          	text:"Error por favor revise la informacion registrada",
		          	icon:"error"
		        })
      		}
        });
    };

	return (
		<div>
			<section class="navigation">
  				<div class="nav-container">
    				<div class="brand">
      					<a href="#!">🍀 Ekoomedia</a>
    				</div>

    				<nav>
  						<div class="nav-mobile">
    						<a id="nav-toggle" href="#!">
    							<span></span>
    						</a>
  						</div>

					  	<ul class="nav-list">
					    	<li>
					    		<a onClick={() => setMostrarComponente(!mostrarComponente)} href="#!">Home</a>
					    	</li>
					    	<li>
					    		<a onClick={() => setMostrarComponente(!mostrarComponente)} href="#!">About</a>
					    	</li>
					    	<li>
					    		<a onClick={() => setMostrarComponente(!mostrarComponente)} href="#!">Contact</a>
					    	</li>
					  	</ul>
					</nav>
    			</div>    			
			</section>	

			<div class="nav-container">

				{mostrarComponente && 
					<h1 class="navigation-center">Hola bienvenido sabemos que quieres viajar en un ...</h1>
				}

				{!mostrarComponente &&
		            <form class="formulario" id="formulario" onSubmit={handleRegistration}>
						
						<br/>

						<div>  
			        		<span class="center">Por favor diligencia el siguiente formulario</span>
			        	</div>  

			        	{
		                  	Object.keys(validationError).length > 0 && (
		                    	<div className="row">
		                      		<div className="col-12">			                      				                      			
		                        		{
		                              		Object.entries(validationError).map(([key, value])=>(

		                              		<small className="text-danger" key={key}>
		                              			{value}
			          							<br/>
			        						</small>
		                              	))}
		                      		</div>
		                    	</div>
		                  	)
		                }

			            <div className='mb-3'>
			            	<br/>
			                <label className='form-label'>Nombre Completo <br /></label>
			                <input 
			                	value={name}
			                    onChange={ (e)=> setName(e.target.value)}
			                    type='text'
			                    className='form-control'
			                />

			                <br />
			            </div>

			            <div className='mb-3'>
			                <label className='form-label'>Email : <br /></label>
			                <input 
			                	value={email}
			                    onChange={ (e)=> setEmail(e.target.value)}
			                    type='email'
			                    className='form-control'
			                />

			                <br />
			            </div>

			            <div className='mb-3'>
			                <label className='form-label'>Celular : <br /></label>
			                <input 
			                	value={mobile}
			                    onChange={ (e)=> setMobile(e.target.value)}
			                    type='number'
			                    className='form-control'
			                />

			                <br />
			            </div>

			            <div className='mb-3'>
			                <label className='form-label'>Edad : <br /></label>
			                <input 
			                	value={age}
			                    onChange={ (e)=> setAge(e.target.value)}
			                    type='number'
			                    className='form-control'
			                />

			                <br />
			            </div>
			            <br />
			            <div>  
			        		<button type='submit' className='btn btn-primary submit'>Guardar</button>
			        	</div> 		            
			        </form>  
			    }
		    </div>	
		</div>
	)
}


$(function() {
	$('nav ul li > a:not(:only-child)').click(function(e) {
			$(this)
		.siblings('.nav-dropdown')
		.slideToggle()
			$('.nav-dropdown')
		.not($(this).siblings())
		.hide()
			e.stopPropagation()
	})

    $('html').click(function() {
      	$('.nav-dropdown').hide()
    })

	// Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
     	$('nav ul').slideToggle();
    });

    $('#nav-toggle').on('click', function() {
      	this.classList.toggle('active')
    })
});

export default ShowForm