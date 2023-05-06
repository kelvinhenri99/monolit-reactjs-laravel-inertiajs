import React from 'react'
import Navbar from '../Layouts/Navbar'

function Home() {
	return (
		<div className="container">
			<div className="card">
				<div className="card-body">Home Page</div>
			</div>
		</div>
	)
}

function HomePageWithNavbar() {
	return (
		<Navbar title={'Home'}>
			<Home />
		</Navbar>
	)
}

export default HomePageWithNavbar
