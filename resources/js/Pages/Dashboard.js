import React from 'react'
import PropTypes from 'prop-types'
import Base from '../Layouts/Base'

export default function Dashboard({ children }) {
	return (
		<>
			<div>
				<Base title={'Dashboard'}>
					{children}
				</Base>
			</div>
		</>
	)
}

Dashboard.propTypes = {
	children: PropTypes.node.isRequired,
}





