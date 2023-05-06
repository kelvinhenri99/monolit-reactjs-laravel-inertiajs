import React from 'react'
import Navbar from '../Layouts/Navbar'

export default function Home() {
	return (
		<>
			<div className="container">
				<div className="card">
					<div className="card-body">Home Page</div>
				</div>
			</div>
		</>
	)
}

Home.layout = (page) => <Navbar children={page} title={'Home'} />
