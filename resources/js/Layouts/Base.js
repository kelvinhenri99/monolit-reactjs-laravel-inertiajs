import { Head, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Sidebar from '../Components/Dashboard/Sidebar'

export default function Base({ children, title }) {
	const { flash } = usePage().props

	flash.type && toast[flash.type](flash.message)

	return (
		<div className="g-sidenav-show bg-gray-100">
			<div className="min-height-300 bg-primary position-absolute w-100"></div>
			<Head title={title} />
			<Sidebar />
			<main className="main-content position-relative border-radius-lg d-flex flex-column min-vh-100 ">
				<Toaster position="top-center" duration="4000" />
				{children}
			</main>
		</div>
	)
}
