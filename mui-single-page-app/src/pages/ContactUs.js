import React from 'react'
import MuiForm from '../components/MuiForm';
import FormikForm from '../components/FormikForm';

function ContactUs() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    const formData = new FormData(e.target);
    console.log(formData.entries())
    const data = Object.fromEntries(formData.entries());
    console.log("data", data);
  }


  const handleSubmit1 = (values) => {
    console.log("data", values);
  }

  return (
    // <MuiForm handleSubmit={handleSubmit} />
    <FormikForm handleSubmit={handleSubmit1} />
  )
}

export default ContactUs