import React from 'react'
import PropTypes from 'prop-types'

import { Link, useForm } from '@inertiajs/inertia-react'
import styled from '@emotion/styled'
import Auth from '../../Layouts/Auth'
import routes from '../../routes'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  width: 100%;
  max-width: 24rem;
`

const CardBody = styled.div`
  padding: 1.5rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #363636;
  background-color: #f3f4f6;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #6366f1;
    background-color: #fff;
    box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.25);
  }
`

const SubmitButton = styled.button`
  background-color: #6366f1;
  border-radius: 0.375rem;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #4f46e5;
    cursor: pointer;
  }
`

const SignupLink = styled.p`
  margin-top: 1.5rem;
  text-align: center;
`

const Register = ({ errors }) => {
	const { data, setData, post } = useForm({
		name: '',
		username: '',
		email: '',
		password: '',
	})

	const changeHandler = (e) => setData({ ...data, [e.target.id]: e.target.value })

	const submitHandler = (e) => {
		e.preventDefault()
		post(routes.register, data)
	}

	return (
		<Container>
			<Card>
				<CardBody>
					<Form onSubmit={submitHandler}>
						<Input
							value={data.name}
							onChange={changeHandler}
							name="name"
							id="name"
							type="text"
							placeholder="Name"
							aria-label="Name"
							error={errors && errors.name}
						/>
						<Input
							value={data.username}
							onChange={changeHandler}
							name="username"
							id="username"
							type="text"
							placeholder="Username"
							aria-label="Username"
							error={errors && errors.username}
						/>
						<Input
							value={data.email}
							onChange={changeHandler}
							name="email"
							id="email"
							type="email"
							placeholder="Email"
							aria-label="Email"
							error={errors && errors.email}
						/>
						<Input
							value={data.password}
							onChange={changeHandler}
							name="password"
							id="password"
							type="password"
							placeholder="Password"
							aria-label="Password"
							error={errors && errors.password}
						/>
						<SubmitButton>Register</SubmitButton>
					</Form>
					<SignupLink>
                Already have an account? <Link href={routes.login}>Login</Link>
					</SignupLink>
				</CardBody>
			</Card>
		</Container>
	)
}

const RegisterPageWithAuth = () => (
	<Auth title={'Register'}>
		<Register />
	</Auth>
)

Register.propTypes = {
	errors: PropTypes.object,
}

export default RegisterPageWithAuth

