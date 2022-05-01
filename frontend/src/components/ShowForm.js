import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'

const ShowForm = () => {

	const [ users, setUsers ] = useState( [] )

	useEffect(() => {
		getAllUsers()
	}, [])

	const getAllUsers = async () => {
		const response = await axios.get(`${endpoint}/users`)
		setUsers(response.data.results)
		// console.log(response.data.results)
	}

	return (
		<div>
			<div id="wrapper">
		        <h1>Hola bienvenido sabemos que quieres viajar en un...
		            <ul>
		                <li>
		                  <a href="/" class="lightbox_trigger">Picture 1</a>
		                </li>

		                <li>
		                  <a href="/" class="lightbox_trigger">Picture 2</a>
		                </li>

		                <li>
		                  <a href="/" class="lightbox_trigger">Picture 3</a>
		                </li>

		                <li>
		                  <a href="/" class="lightbox_trigger">Picture 4</a>
		                </li>
		            </ul>
		        </h1>
		        {
		        	users.map( (user) => (
		        		<tr key={user.id}>
		        			<td>{user.name}</td>
		        		</tr>
		        	))
		        }
		    </div>
		</div>
	)
}

export default ShowForm