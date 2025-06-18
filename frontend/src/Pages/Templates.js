import React from 'react'
import Layout from '../Components/Layout'
import {Link} from 'react-router-dom'
function Templates() {
  return (
    <Layout>
      <Link to='/personaldetails'>
        <h1>Select Templates</h1>
      </Link>
    </Layout>
  )
}

export default Templates