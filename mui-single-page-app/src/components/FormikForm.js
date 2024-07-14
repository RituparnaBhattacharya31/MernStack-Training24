import React from 'react'
import { Button, Card, FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";

function FormikForm({ handleSubmit }) {
    let initialFormValues = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

    const validationSchema = Yup.object({
        "name": Yup.string().min(2, "Name is too short").max(10).required("Name is required"),
        "email": Yup.string().email('Invalid email address').required("Email is required"),
        "phone": Yup.string().min(10).matches(/^[0-9]+$/, "Phone number must be digits only").required("Phone number is required"),
    });

    const validateMessage = (value) => {
        if (value.length < 20 || value.length > 30) {
            return "Invalid message length";
        }
    }

    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
                resetForm()
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Card
                        autoComplete="off"
                        sx={{
                            width: 200, height: 400, marginTop: "30px",
                            backgroundColor: "#FFFFF", marginLeft: "auto", marginRight: "auto", mt: 2
                        }}
                    >
                        <FormControl variant='standard' sx={{ mt: 2 }}>
                            {/* <InputLabel html="name">Name</InputLabel> */}
                            <Field as={TextField} id="name" name="name" label="Name"></Field>
                            {touched.name && errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                            {/* <ErrorMessage component={FormHelperText} name="name" /> */}
                        </FormControl>
                        <br></br>
                        <FormControl variant='standard' sx={{ mt: 2 }}>
                            <InputLabel html="email">Email</InputLabel>
                            <Field as={Input} id="email" name="email"></Field>
                            <ErrorMessage component={FormHelperText} name="email" />
                        </FormControl>
                        <br></br>
                        <FormControl variant='standard' sx={{ mt: 2 }}>
                            <InputLabel html="name">Phone</InputLabel>
                            <Field as={Input} id="phone" name="phone"></Field>
                            <ErrorMessage component={FormHelperText} name="phone" />
                        </FormControl>
                        <br></br>
                        <FormControl variant='standard' sx={{ mt: 2 }}>
                            <InputLabel html="name">Message</InputLabel>
                            <Field as={Input} id="message" name="message" validate={validateMessage} multiline rows={4}></Field>
                            {touched.message && errors.message && <div style={{ color: "red" }}>{errors.message}</div>}
                        </FormControl>
                        <br></br>
                        <Button variant='contained' sx={{ mt: 2 }} type='submit'>Submit</Button>
                    </Card>
                </Form>
            )
            }
        </Formik >
    )
}

export default FormikForm