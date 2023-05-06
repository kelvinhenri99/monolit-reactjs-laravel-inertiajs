import React from 'react'

import { useForm } from '@inertiajs/inertia-react'
import styled from '@emotion/styled'
import Auth from '../../Layouts/Auth'

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

export default function Login({ errors }) {
	const { data, setData, post, processing } = useForm({
		email: '',
		password: '',
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		post('/login', {
			onSuccess: () => {
				setData('email', '')
				setData('password', '')
			},
		})
	}

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	return (
		<LoginWrapper>
			<Form onSubmit={handleSubmit}>
				<Input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
				{errors && <div className="text-danger">{errors.email}</div>}
				<Input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />
				{errors && <div className="text-danger">{errors.password}</div>}
				<Button type="submit" disabled={processing}>
					{processing ? 'Loading...' : 'Login'}
				</Button>
			</Form>
		</LoginWrapper>
	)
}



Login.layout = (page) => <Auth children={page} title={'Login'} />
