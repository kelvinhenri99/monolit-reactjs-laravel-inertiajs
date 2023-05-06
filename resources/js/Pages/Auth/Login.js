import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useForm } from '@inertiajs/inertia-react'
import styled from '@emotion/styled'
import Auth from '../../Layouts/Auth'

import routes from '../../routes'

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 108px);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 20px;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`

const Button = styled.button`
  padding: 8px;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  border: none;
`

function Login({ errors }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { post, processing } = useForm()

	const handleSubmit = (e) => {
		e.preventDefault()
		post(routes.login, {
			data: { email, password },
			onSuccess: () => {
				setEmail('')
				setPassword('')
			},
		})
	}

	return (
		<LoginWrapper>
			<Form onSubmit={handleSubmit}>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{errors && <div className="text-danger">{errors.email}</div>}
				<Input
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{errors && <div className="text-danger">{errors.password}</div>}
				<Button type="submit" disabled={processing}>
					{processing ? 'Loading...' : 'Login'}
				</Button>
			</Form>
		</LoginWrapper>
	)
}

const LoginPageWithAuth = () => (
	<Auth title={'Login'}>
		<Login />
	</Auth>
)

Login.propTypes = {
	errors: PropTypes.object,
}

export default LoginPageWithAuth
