import React from 'react'
import Base from '../Layouts/Base'

export default function Dashboard() {
  return (
    <>
      <div>
        <h1>Timeline</h1>
      </div>
    </>
  )
}

Dashboard.layout = (page) => <Base children={page} title={'Dashboard'} />
