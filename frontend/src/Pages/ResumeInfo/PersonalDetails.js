import React from 'react'
import Input from '../../Components/Input'
import Layout from '../../Components/Layout'
import Template1 from '../../Template1'
function PersonalDetails() {
  return (
    <Layout>
        <div className='editResume'>
        <div className ='editResumeForm'>
        <Input label="Name" placeholder="Enter your Name" />
        <Input label="Phone" placeholder="Enter your Mobile" />
        <Input label="Email" placeholder="Enter your Email" />
        <Input label="Address" placeholder="Enter your Address" />
        </div>
        <div className='liveResume'>
        <Template1 />
        </div>
        </div>
    </Layout>
  )
}

export default PersonalDetails


{/*
    Input Component
    Type Input Manually

*/}