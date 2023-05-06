import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import Navbar from '../Components/Navbar/index'

export default function Guest({ children, title }) {
	return (
		<div>
			<Head title={title} />
			<Navbar />
			{children}
		</div>
	)
}
